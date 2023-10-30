export const OPENAI_MODERTATIONS_API_ENDPOINT =
  "https://api.openai.com/v1/moderations";
export const OPENAI_COMPLETIONS_API_ENDPOINT =
  "https://api.openai.com/v1/chat/completions";

export const BLOGGER_TASK_SYSTEM_PROMPT =
  "Wygeneruj treść sekcji bloga na podstawie tytułu podanego przez użytkownika. Maksymalnie 5 zdań.";

export const LIAR_TASK_USER_QUESTION = "What is the capital of Poland?";
export const LIAR_TASK_GUARDRAILS_SYSTEM_PROMPT = `Your will check if the answer to a provided question is correct. If it is, return 'YES', if it is not, return 'NO' and nothing else.
###
Question: ${LIAR_TASK_USER_QUESTION}
###
  `;
