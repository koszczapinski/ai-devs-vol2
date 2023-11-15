import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { getCurrentDate } from "../helpers";
import { TaskResponse } from "../types";

const token = await getToken("tools");
const { question, msg } = await getTask<TaskResponse & { question: string }>(
  token
);

const SYSTEM_PROMPT = `${msg}.
#Facts:
Today is: ${getCurrentDate()}

#Rules:
- Always use YYYY-MM-DD format for dates
- Always response with valid JSON

#Examples:
User: Przypomnij mi, że mam kupić mleko
AI: {"tool":"ToDo","desc":"Kup mleko"}
User: Jutro mam spotkanie z Marianem
AI: {"tool":"Calendar","desc":"Spotkanie z Marianem","date":"2023-11-16"}
`;

const data = await openAICompletion(question, SYSTEM_PROMPT, {
  model: "gpt-4",
});

await sendAnswer(token, JSON.parse(data.choices[0].message.content));
