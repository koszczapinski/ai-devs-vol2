import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { WHOAMI_TASK_USER_PROMPT } from "../consts";
import { delay } from "../helpers";
import { TaskResponse } from "../types";

const token = await getToken("whoami");

const hints: string[] = [];
let answer = "I don't know.";

do {
  const { hint } = await getTask<TaskResponse & { hint: string }>(token);
  hints.push(hint);

  const data = await openAICompletion(WHOAMI_TASK_USER_PROMPT(hints));
  answer = data.choices[0].message.content;

  await delay(2000);
} while (answer === "I don't know.");

await sendAnswer(token, answer);
