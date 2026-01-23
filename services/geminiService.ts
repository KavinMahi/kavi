
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Tech Consultant for Alex Thompson, a world-class Senior Full Stack Engineer and Cloud Architect. 
Your goal is to provide high-level technical insights while encouraging potential partners or employers to reach out to Alex.
Speak with authority on software architecture, React, Node.js, Cloud Infrastructure (AWS/GCP), and AI/LLM integration.
Avoid generic advice; focus on performance optimization, scalability, and modern engineering best practices.
Always maintain a helpful yet sophisticated tech-forward tone.
If asked about services, mention Frontend Engineering, Backend Systems, Cloud DevOps, and Technical Consulting.
`;

export const getFinancialAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request at the moment. Please try again or reach out to Alex directly via the contact form.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The terminal is currently busy. Please try again in a few moments or contact Alex via LinkedIn.";
  }
};
