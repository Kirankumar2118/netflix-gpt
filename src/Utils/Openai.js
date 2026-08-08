import { GoogleGenAI } from "@google/genai";
import { OPEN_AI_KEY } from "./constant";

const Openai = new GoogleGenAI({
  apiKey: OPEN_AI_KEY,
});

export default Openai;
