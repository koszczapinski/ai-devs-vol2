import { getTask, getToken, sendAnswer } from "../common";
import { TaskResponse } from "../types";

const token = await getToken("blogger");
const { blog } = await getTask<TaskResponse & { blog: string[] }>(token);

console.log({ blog });

//await sendAnswer(token, moderatedSentences);
