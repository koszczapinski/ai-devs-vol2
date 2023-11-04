import { unlink } from "node:fs/promises";
import { getTask, getToken, openAIEmbedding, sendAnswer } from "../common";
import { TaskResponse } from "../types";

const DOWNLOADED_FILE_NAME = "file-for-transcription.mp3";

const token = await getToken("whisper");
const { msg } = await getTask<TaskResponse & {hint: string}>(token);

console.log(msg);
const file = Bun.file(DOWNLOADED_FILE_NAME);
const fileExist = await file.exists();
if (fileExist) {
    await unlink(DOWNLOADED_FILE_NAME)
}

const fileUrl = msg.match(/(https?:\/\/[^\s]+)/g)[0];
console.log(fileUrl);
const response = await fetch(fileUrl);
await Bun.write(DOWNLOADED_FILE_NAME, response);

// send file via axios post to endpoint
const { data } = await axios.post("https://api.openai.com/v1/files", {
    purpose: "search",
        file: Bun.file(DOWNLOADED_FILE_NAME),
    });

//const { data } = await openAIEmbedding("Hawaiian pizza");

//await sendAnswer(token, data[0].embedding);
