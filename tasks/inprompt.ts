import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { INPROMPT_TASK_SYSTEM_PROMPT } from "../consts";
import { TaskResponse } from "../types";

const token = await getToken("inprompt");
const { input: sentences, question } = await getTask<
  TaskResponse & { input: string[]; question: string }
>(token);

const personData = await openAICompletion(
  question,
  INPROMPT_TASK_SYSTEM_PROMPT,
  {
    model: "gpt-4",
  }
);

const personName = personData.choices[0].message.content;

const filteredSentence = sentences.find((sentence) =>
  sentence.toLowerCase().includes(personName.toLowerCase())
);

const answerData = await openAICompletion(question, filteredSentence, {
  model: "gpt-4",
});

await sendAnswer(token, answerData.choices[0].message.content);
