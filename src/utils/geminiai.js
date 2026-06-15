import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default ai;