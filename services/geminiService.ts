import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client with the API key
const ai = new GoogleGenAI({ apiKey });

export const getMaterialAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "AI Service is currently unavailable (Missing API Key). Please contact us directly.";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are the expert technical consultant for 'Gowtham Digitals', a premium printing and signage company.
      Your goal is to recommend the best printing material or signage type based on the user's needs.
      
      Our Services/Materials:
      1. Flex Printing (Standard outdoor)
      2. Star Flex (Premium, thicker, better quality)
      3. Vinyl (Stickers, glass branding, smooth surfaces)
      4. One Way Vision (Glass, see-through from inside)
      5. Back Light Board (Glowing boxes)
      6. LED Boards (Premium 3D letters)
      7. Eco Solvent (High definition, indoor/close viewing)
      
      Rules:
      - Be concise and professional.
      - Suggest a specific product from our list.
      - Explain WHY efficiently (e.g., "Best for rain durability").
      - Keep response under 80 words.
      - End with "Would you like a quote for this?"
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't determine the best material. Please call us for expert advice.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};
