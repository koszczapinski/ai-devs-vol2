import { getToken, sendAnswer } from "../common";

const token = await getToken("meme");
await sendAnswer(token, "https://cdn.renderform.io/pdRXIRcQbtgtnwGyYaiL/results/req-440ce487-2491-4f21-acd5-6ee34e4bd12f.jpg");
