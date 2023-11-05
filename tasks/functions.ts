import { getToken, sendAnswer } from "../common";

const token = await getToken("functions");

export const addUserSchema = {
  name: "addUser",
  description: "Add new user to database",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "User name",
      },
      surname: {
        type: "string",
        description: "User surname",
      },
      year: {
        type: "integer",
        description: "User year of birth",
      },
    },
  },
};

await sendAnswer(token, addUserSchema);
