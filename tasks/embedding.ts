import { getToken, openAIEmbedding, sendAnswer } from "../common";

const token = await getToken("embedding");

const { data } = await openAIEmbedding("Hawaiian pizza");

await sendAnswer(token, data[0].embedding);
