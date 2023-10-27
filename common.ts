import axios from "./axiosInterceptor";
import { OPENAI_MODERTATIONS_API_ENDPOINT } from "./consts";

export async function getToken(taskname: string): Promise<string> {
  const { data } = await axios.post<TokenResponse>(
    `${process.env.AI_DEVS_API_BASE_URL}/token/${taskname}`,
    {
      apikey: process.env.AI_DEVS_API_KEY,
    }
  );

  return data.token === undefined ? "" : data.token;
}

export async function getTask(token: string): Promise<TaskResponse> {
  const response = await axios.get<TaskResponse>(
    `${process.env.AI_DEVS_API_BASE_URL}/task/${token}`
  );

  return response.data;
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
  const { data } = await axios.post(
    OPENAI_MODERTATIONS_API_ENDPOINT,
    { input },
    { headers }
  );
  return data;
}
