//import data from '../3friends.json';
import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { TaskResponse } from "../types";

const token = await getToken("optimaldb");
const { msg } = await getTask<TaskResponse & { msg: string }>(token);

const path = "./3friends.json";
const file = Bun.file(path);

const contents = await file.json();
console.log(contents);

const data = await openAICompletion(
    JSON.stringify(contents),
    msg,
  );

await sendAnswer(token, data.choices[0].message.content);
