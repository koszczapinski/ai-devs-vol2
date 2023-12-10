import { getToken, sendAnswer } from "../common";

const token = await getToken("md2html");
await sendAnswer(token, process.env.MD2HTML_TASK_URL);
