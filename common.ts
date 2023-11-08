import puppeteer from "puppeteer";
import axios from "./axiosInterceptor";
import {
  OPENAI_COMPLETIONS_API_ENDPOINT,
  OPENAI_EMBEDDINGS_API_ENDPOINT,
  OPENAI_MODERTATIONS_API_ENDPOINT,
  OPENAI_TRANSCRIPTIONS_API_ENDPOINT,
} from "./consts";
import { TaskResponse, TokenResponse } from "./types";

export async function getToken(taskname: string): Promise<string> {
  try {
    const { data } = await axios.post<TokenResponse>(
      `${process.env.AI_DEVS_API_BASE_URL}/token/${taskname}`,
      {
        apikey: process.env.AI_DEVS_API_KEY,
      }
    );
    return data.token;
  } catch (error) {
    console.error(error);
  }
  return "";
}

export async function getTask<T>(token: string): Promise<T> {
  try {
    const { data } = await axios.get<T>(
      `${process.env.AI_DEVS_API_BASE_URL}/task/${token}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
  return {} as T;
}

export async function getTaskQuestionAnswer(
  token: string,
  question: string
): Promise<string> {
  const formData = new FormData();
  formData.append("question", String(question));

  try {
    const { data } = await axios.post<TaskResponse & { answer: string }>(
      `${process.env.AI_DEVS_API_BASE_URL}/task/${token}`,
      formData
    );
    return data.answer;
  } catch (error) {
    console.error(error);
  }
  return "";
}

export async function sendAnswer(token: string, answer: unknown) {
  try {
    const { data } = await axios.post(
      `${process.env.AI_DEVS_API_BASE_URL}/answer/${token}`,
      JSON.stringify({ answer })
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
};

export async function getOpenAIModerationAPIResponse(input: string) {
  try {
    const { data } = await axios.post(
      OPENAI_MODERTATIONS_API_ENDPOINT,
      { input },
      { headers }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function openAICompletion(
  userMessage: string,
  systemPrompt: string = "Act as helpfull assistant",
  options?: {
    model?: "gpt-3.5-turbo" | "gpt-4";
    maxTokens?: number;
    temperature?: number;
  }
) {
  try {
    const { data } = await axios.post(
      OPENAI_COMPLETIONS_API_ENDPOINT,
      {
        model: options?.model ?? "gpt-3.5-turbo",
        max_tokens: options?.maxTokens ?? 500,
        temperature: options?.temperature ?? 0.5,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        stream: false,
        stop: ["#-#"],
      },
      { headers }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function openAIEmbedding(input: string) {
  try {
    const { data } = await axios.post(
      OPENAI_EMBEDDINGS_API_ENDPOINT,
      {
        input,
        model: "text-embedding-ada-002",
      },
      { headers }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function openAITranscription(fileName: string): Promise<string> {
  const formData = new FormData();
  formData.append("file", Bun.file(fileName));
  formData.append("model", "whisper-1");
  try {
    const { data } = await axios.post(
      OPENAI_TRANSCRIPTIONS_API_ENDPOINT,
      formData,
      {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data.text;
  } catch (error) {
    console.error(error);
  }
  return "";
}

export async function getPageContent(url: string, timeout = 60000) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { timeout });
    return await page.content();
  } catch (error) {
    throw new Error(`Failed to get page content from ${url}: ${error}`);
  } finally {
    await browser.close();
  }
}

export function stripHtml(html: string) {
  if (typeof html !== "string") {
    throw new TypeError("Expected a string");
  }
  return html.replace(/(<([^>]+)>)/gi, "");
}
