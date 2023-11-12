export const OPENAI_MODERTATIONS_API_ENDPOINT =
  "https://api.openai.com/v1/moderations";
export const OPENAI_COMPLETIONS_API_ENDPOINT =
  "https://api.openai.com/v1/chat/completions";
export const OPENAI_EMBEDDINGS_API_ENDPOINT =
  "https://api.openai.com/v1/embeddings";
export const OPENAI_TRANSCRIPTIONS_API_ENDPOINT =
  "https://api.openai.com/v1/audio/transcriptions";

export const BLOGGER_TASK_SYSTEM_PROMPT =
  "Wygeneruj treść sekcji bloga na podstawie tytułu podanego przez użytkownika. Maksymalnie 5 zdań.";

export const LIAR_TASK_USER_QUESTION = "What is the capital of Poland?";
export const LIAR_TASK_GUARDRAILS_SYSTEM_PROMPT = `You will check if the answer to a provided question is correct. If it is, return 'YES', if it is not, return 'NO' and nothing else.
###
Question: ${LIAR_TASK_USER_QUESTION}
###
  `;

export const INPROMPT_TASK_SYSTEM_PROMPT =
  "Zwróć tylko imię osoby której dotyczy zadane pytanie i nic więcej.";

export const SCRAPER_TASK_SYSTEM_PROMPT = (
  context: string
) => `Return answer for the question in POLISH language, based on provided article. Be concise in your answer. Maximum length for the answer is 200 characters
  ### article
  ${context}
  ### /article
  `;

export const WHOAMI_TASK_USER_PROMPT = (hints: string[]) =>
  `Each time you call up this task, I will return a trivia item about a certain person (the person does not change). Guess who I am:
  ### hints
  ${hints.join(".")}. "
  ###
  Return only the name and surname of this person. Answer only if you are sure, and if not return: "I don't know."`;
