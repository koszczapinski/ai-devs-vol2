import {
  getOpenAIModerationAPIResponse,
  getTask,
  getToken,
  sendAnswer,
} from "../common";

const token = await getToken("moderation");
const { input: sentences } = await getTask(token);

const moderatedSentences: number[] = [];

for (const sentence of sentences) {
  const moderationResponse = await getOpenAIModerationAPIResponse(sentence);
  moderatedSentences.push(+moderationResponse.results[0].flagged);
}

await sendAnswer(token, moderatedSentences);
