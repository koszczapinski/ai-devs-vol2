import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { getCountryPopulation, getCurrencyExchangeRate } from "../helpers";
import { TaskResponse } from "../types";

const token = await getToken("knowledge");
const { question } = await getTask<TaskResponse & { question: string }>(token);

const SYSTEM_PROMPT = `Classify the question into one of these categories: general | population | currency

  ###example
  Question: What is the population of France?
  AI: { "category": "population", "country": "France"}
  Question: Who wrote the book 'Romeo and Juliet'?
  AI: { "category": "general"}
  Question: What is the EURO exchange rate now?
  AI: { "category": "currency", "code": "eur"}
  ###

  Retrun it in JSON format in English language.
  `;

const data = await openAICompletion(question, SYSTEM_PROMPT);

const {
  category,
  country,
  code,
}: { category: string; country?: string; code?: string } = JSON.parse(
  data.choices[0].message.content
);

if (category === "general") {
  const data = await openAICompletion(question);
  await sendAnswer(token, data.choices[0].message.content);
}

if (category === "population" && country) {
  const population = await getCountryPopulation(country);
  await sendAnswer(token, population);
}

if (category === "currency" && code) {
  const rate = await getCurrencyExchangeRate(code);
  await sendAnswer(token, rate);
}
