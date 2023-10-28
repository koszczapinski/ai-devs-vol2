import { getTask, getToken, sendAnswer } from "../common";

const token = await getToken("helloapi");
const { cookie } = await getTask<{ code: number; msg: string; cookie: string }>(
  token
);
await sendAnswer(token, cookie);
