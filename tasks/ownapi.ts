import { getToken, sendAnswer } from "../common";

const token = await getToken("ownapi");
await sendAnswer(token, process.env.OWNAPI_TASK_URL);
