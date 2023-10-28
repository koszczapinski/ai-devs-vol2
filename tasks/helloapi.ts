import { getTask, getToken, sendAnswer } from "../common";
import { TaskResponse } from "../types";

const token = await getToken("helloapi");
const { cookie } = await getTask<TaskResponse & { cookie: string }>(token);
await sendAnswer(token, cookie);
