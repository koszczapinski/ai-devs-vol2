import { getToken } from "./common";

console.log("Hello via Bun!");

(async () => {
    const token = await getToken("helloapi");
    console.log("Token:", token);
    
    // const task = await getTask(token);
    // console.log("Task:", task);
    
    // const answer = await sendAnswer(token, "Hello!");
    // console.log("Answer:", answer);
})()
