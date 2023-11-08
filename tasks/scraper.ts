import {
  getPageContent,
  getTask,
  getToken,
  openAICompletion,
  sendAnswer,
  stripHtml,
} from "../common";
import { SCRAPER_TASK_SYSTEM_PROMPT } from "../consts";
import { TaskResponse } from "../types";

const token = await getToken("scraper");
const { input: pageUrl, question } = await getTask<
  TaskResponse & { input: string; question: string }
>(token);

const pageContent = await getPageContent(pageUrl);
const strippedPageContent = stripHtml(pageContent);

if (strippedPageContent.includes("server error X_X")) {
  throw new Error("The server returned an error: 'server error X_X'");
}

const data = await openAICompletion(
  question,
  SCRAPER_TASK_SYSTEM_PROMPT(strippedPageContent),
  { model: "gpt-4" }
);

await sendAnswer(token, data.choices[0].message.content);
