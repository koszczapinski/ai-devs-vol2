import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { BLOGGER_SYSTEM_PROMPT } from "../consts";
import { TaskResponse } from "../types";

const token = await getToken("blogger");
const { blog } = await getTask<TaskResponse & { blog: string[] }>(token);

const sectionsContent: string[] = [];

for (const title of blog) {
  const data = await openAICompletion(title, BLOGGER_SYSTEM_PROMPT, {
    model: "gpt-4",
  });
  sectionsContent.push(data.choices[0].message.content);
}

await sendAnswer(token, sectionsContent);
