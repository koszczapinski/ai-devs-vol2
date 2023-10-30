import {
  getTask,
  getToken,
  openAICompletion,
  sendAnswer,
  getTaskQuestionAnswer,
} from "../common";
import {
  LIAR_TASK_GUARDRAILS_SYSTEM_PROMPT,
  LIAR_TASK_USER_QUESTION,
} from "../consts";

const token = await getToken("liar");
await getTask(token);

const taskAnswer = await getTaskQuestionAnswer(token, LIAR_TASK_USER_QUESTION);

const data = await openAICompletion(
  taskAnswer,
  LIAR_TASK_GUARDRAILS_SYSTEM_PROMPT
);

await sendAnswer(token, data.choices[0].message.content);
