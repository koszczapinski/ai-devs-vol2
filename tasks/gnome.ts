import OpenAI from "openai";
import { getTask, getToken, sendAnswer } from "../common";
import { TaskResponse } from "../types";

const openai = new OpenAI();

const token = await getToken("gnome");
const { msg: text, url } = await getTask<TaskResponse & { url: string }>(token);

const response = await openai.chat.completions.create({
  model: "gpt-4-vision-preview",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text },
        {
          type: "image_url",
          image_url: {
            url,
          },
        },
      ],
    },
  ],
});
console.log(response.choices[0].message.content);

await sendAnswer(token, response.choices[0].message.content);
