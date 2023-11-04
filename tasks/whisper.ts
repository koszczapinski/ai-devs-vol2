import { unlink } from "node:fs/promises";
import { getTask, getToken, openAITranscription, sendAnswer } from "../common";
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

const transcription = await openAITranscription(DOWNLOADED_FILE_NAME);

await sendAnswer(token, transcription);
