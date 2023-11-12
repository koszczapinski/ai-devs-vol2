import { getTask, getToken, openAICompletion, sendAnswer } from "../common";
import { TaskResponse } from "../types";
import { getAllPeople } from "../helpers";

const token = await getToken("people");
const { data: url, question } = await getTask<
  TaskResponse & { data: string; question: string }
>(token);

const people = await getAllPeople(url, 2000);

const getNamePrompt = `Zwróć imię (oficjalna forma) i nazwisko osoby, której dotyczy zadane pytanie.

### pytanie:
${question}
###

### przykład:
Question: Jaki kolor się podoba Mariuszowi Kaczorowi?
AI: {imie: "Mariusz", nazwisko: "Kaczor"}};
Question: Gdzie mieszka Krysia Kowalska?
AI: {imie: "Krystyna", nazwisko: "Kowalska"}};
###

Odpowiedź zawsze zwracaj w formacie JSON
`;

const personName = await openAICompletion(getNamePrompt, " ", {
  model: "gpt-4",
});

const { imie, nazwisko } = JSON.parse(personName.choices[0].message.content);

const foundPerson = people.find(
  (person) => person.imie === imie && person.nazwisko === nazwisko
);

if (foundPerson) {
  const getAnswerPrompt = `Zwróć odpowiedź na pytanie dotyczące ${imie} ${nazwisko}, używając poniszych informacji na jej temat.

  ### pytanie:
  ${question}
  ###

  ### informacje o ${imie} ${nazwisko}:
  ${JSON.stringify(foundPerson)}
  ###`;

  const answer = await openAICompletion(getAnswerPrompt, " ");

  await sendAnswer(token, answer.choices[0].message.content);
}
