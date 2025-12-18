
import { GoogleGenAI, Type } from "@google/genai";
import { Meal, UserHealthData } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getWasteReductionTips(wasteData: any[]) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on this weekly food waste data (in kg): ${JSON.stringify(wasteData)}, give 3 short, creative, and "professional but cool" tips for a school cafeteria to reduce waste. Use teal emojis.`,
    });
    return response.text;
  }

  async getHealthFact(mealName: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Give a fun, short nutrition fact about ${mealName} for a student. Use emojis.`,
    });
    return response.text;
  }

  async getPersonalizedRecommendation(userData: UserHealthData, meals: Meal[]) {
    const mealList = meals.map(m => ({ id: m.id, name: m.name, calories: m.calories, category: m.category }));
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a school nutritionist. A student aged ${userData.age}, height ${userData.height}cm, and weight ${userData.weight}kg is looking for a meal. 
      Analyze these menu options: ${JSON.stringify(mealList)}. 
      Return only the ID of the single best meal for their growth and health, and a short 1-sentence explanation why.
      Format: ID | Explanation`,
    });
    const parts = response.text.split('|');
    return {
      mealId: parts[0]?.trim(),
      explanation: parts[1]?.trim() || "This meal provides balanced nutrition for your growth profile!"
    };
  }
}

export const geminiService = new GeminiService();
