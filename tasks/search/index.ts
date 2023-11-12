import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { QdrantClient } from "@qdrant/js-client-rest";
import { v4 as uuidv4 } from "uuid";

import { getTask, getToken, sendAnswer } from "../../common";
import { TaskResponse } from "../../types";

import { getArchiveLinks } from "./helpers";

const EXTERNAL_DATA_URL = "https://unknow.news/archiwum.json";
const COLLECTION_NAME = "unknow_news_archive";

const token = await getToken("search");
const { question } = await getTask<TaskResponse & { question: string }>(token);

const qdrant = new QdrantClient({ url: process.env.QDRANT_URL });
const embeddings = new OpenAIEmbeddings({ maxConcurrency: 5 });
const questionEmbedding = await embeddings.embedQuery(question);

const result = await qdrant.getCollections();
const indexed = result.collections.find(
  (collection) => collection.name === COLLECTION_NAME
);

if (!indexed) {
  await qdrant.createCollection(COLLECTION_NAME, {
    vectors: { size: 1536, distance: "Cosine", on_disk: true },
  });
}

const collectionInfo = await qdrant.getCollection(COLLECTION_NAME);

if (!collectionInfo.points_count) {
  const links = await getArchiveLinks(EXTERNAL_DATA_URL);

  const linksWithMetadata = links.map((link) => ({
    ...link,
    metadata: {
      source: COLLECTION_NAME,
      content: link.info,
      url: link.url,
      uuid: uuidv4(),
    },
  }));

  const points = [];
  for (const link of linksWithMetadata) {
    const [embedding] = await embeddings.embedDocuments([link.title]);
    points.push({
      id: link.metadata.uuid,
      payload: link.metadata,
      vector: embedding,
    });
  }

  await qdrant.upsert(COLLECTION_NAME, {
    wait: true,
    batch: {
      ids: points.map((point) => point.id),
      vectors: points.map((point) => point.vector),
      payloads: points.map((point) => point.payload),
    },
  });
}

const search = await qdrant.search(COLLECTION_NAME, {
  vector: questionEmbedding,
  limit: 1,
  filter: {
    must: [
      {
        key: "source",
        match: {
          value: COLLECTION_NAME,
        },
      },
    ],
  },
});

await sendAnswer(token, search[0].payload?.url);
