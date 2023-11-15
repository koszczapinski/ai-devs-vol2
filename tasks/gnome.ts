import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { getCurrentDate } from "../helpers";
import { TaskResponse } from "../types";

const token = await getToken("gnome");
const { question, msg } = await getTask<TaskResponse & { question: string }>(
  token
);

/*

Rozwiąż zadanie API o nazwie ‘gnome’.
Backend będzie zwracał Ci linka do obrazków przedstawiających gnomy/skrzaty.
Twoim zadaniem jest przygotowanie systemu, który będzie rozpoznawał, jakiego koloru
czapkę ma wygenerowana postać. Uwaga! Adres URL zmienia się po każdym pobraniu zadania
i nie wszystkie podawane obrazki zawierają zdjęcie postaci w czapce. Jeśli natkniesz się
na coś, co nie jest skrzatem/gnomem, odpowiedz “error”. Do tego zadania musisz użyć GPT-4V (Vision).

*/

// const SYSTEM_PROMPT = `${msg}.
// #Facts:
// Today is: ${getCurrentDate()}

// #Rules:
// - Always use YYYY-MM-DD format for dates
// - Always response with valid JSON

// #Examples:
// User: Przypomnij mi, że mam kupić mleko
// AI: {"tool":"ToDo","desc":"Kup mleko"}
// User: Jutro mam spotkanie z Marianem
// AI: {"tool":"Calendar","desc":"Spotkanie z Marianem","date":"2023-11-16"}
// `;

// const data = await openAICompletion(question, SYSTEM_PROMPT, {
//   model: "gpt-4",
// });

//await sendAnswer(token, JSON.parse(data.choices[0].message.content));
