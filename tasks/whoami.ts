import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { TaskResponse } from "../types";

const token = await getToken("whoami");
const { hint } = await getTask<TaskResponse & { hint: string }>(token);

const data = await openAICompletion(
  hint,
  "For the provided hint, I will guess the name of a person.",
  { model: "gpt-4" }
);

await sendAnswer(token, data.choices[0].message.content);
