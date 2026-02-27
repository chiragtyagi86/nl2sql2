import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getChatResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const menuContext = `
      Menu Items for Recommendations:
      - Black Truffle Linguine ($24.00): Homemade pasta, truffle butter, shaved truffles. Image: https://lh3.googleusercontent.com/aida-public/AB6AXuDn7eZK6FsI1MeNqchTRfZ6JsjXl20pONrJllFJMD51qku1okVzIoH4HUf6swjJHMqzDZkmv36jIOZ-RZOQZ8zFHjTQ30gjbYJ5lfKQPTbBZiTMgAAPXJYQIojQhUIk40Ax3ZNPt2QYeRzqOo1wlNtsJxnAqVUyrr8nGLAKvc0IsrnmiBU2mGQzVXjBkAJVNioFciy2SMK-UgJMkQHIztxb2iq0ZnDvLlyV5Vvq4OXtDhXi9tedYKz044L-JGq1aRqwLXkJfjviSimw
      - Miso Glazed Salmon ($32.00): Sustainable salmon, honey-miso glaze, jasmine rice. Image: https://lh3.googleusercontent.com/aida-public/AB6AXuBSHM0VwWNEbUNmTutBquD_MGYhCrt6mEvssk6ZrCdBsLGDbcLKG_hWFJ6N1ZMPyuGqdhIFkX0HwXtrFegc0X2bUUOmojDs0tqMnHt9xyTs7V1qXwMwVLaAhTuqqod9dlCUrFgftM4UckxsE_1F8nV2pisvbo3ZNKdC05ryanyCEbw_SIRXHaF1Sb5aWY2N85rsut2p3J7Q3hicBmBgClg6vTG0zLYLXErrN5Pt8o-IQCYSkMCKyz1ZW-CnhRQtyzVFsIYR_7cIupeH
      - Gusto Superbowl ($19.00): Quinoa, avocado, sweet potato, kale. Image: https://lh3.googleusercontent.com/aida-public/AB6AXuC7rndYj4P_v4IpKSOPQqRX-dmx8ts7U-An-jvrr6QaPZMl3c94TUymDtbdImkjM4FuvcpDFKmKFdYYd5JFINBCfRaj5QIDeQWa2RFaq2CqU_6MiOdGWYRDD9lRvwRKUXz54CPhwOVRiisR2rsHqKtkW0aZRVWlhXm_hRY61pwFpWNVYXDl1cws7r6yocj2MkyF7wPgV4l0yEg8OCYMweAD8eGrzW20NBDZGE5bhXxJPBhDHBek4GZuet6pzFtA6Vmt-n1ZYlBpT24x
      - Wagyu Burger ($22.00): Wagyu beef, caramelized onions, swiss cheese. Image: https://lh3.googleusercontent.com/aida-public/AB6AXuBYZWaG1AbVixAv8zFANqFtSvP5GkV5HckPrhFFygGszJUmaeJjZgmALrKroIszGsLbrXumSBuDDw3VWlna2Y7Ilt2u5gbIUSZtZ5xKP_75mhbaxZgjfBoNTReMNcxs1mIQxYZXvonq75qfb0rujxpm7CW44IzpOvcXaecqQxafb7ZcsUGXWyWDsp8ua98JRy9to8jKYTOiHEYMclks5IfqjxY0qkAWjTRXm4Cff48GcOAFclHRyOzFo8PsprGizmmhmBqoL-DmJ-uF
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are Gusto, an AI dining assistant for Gusto Moderno restaurant. 
        Use this menu context: ${menuContext}.
        
        CRITICAL INSTRUCTIONS:
        1. When suggesting a dish, ALWAYS include its image URL in this format:
           [IMAGE:{"url":"https://...","alt":"Dish Name","caption":"Price"}]
        2. Keep responses concise and friendly.
        3. Use Markdown for formatting.`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. How else can I help you?";
  }
}

export async function getAdminChatResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const restaurantContext = `
      Current Restaurant Stats:
      - Total Sales Today: $24,850.00
      - Total Orders Today: 128
      - Active Customers: 842
      - Average Rating: 4.8/5.0
      - Top Dishes: 
        1. Truffle Tagliatelle (420 orders) - Image: https://lh3.googleusercontent.com/aida-public/AB6AXuDn7eZK6FsI1MeNqchTRfZ6JsjXl20pONrJllFJMD51qku1okVzIoH4HUf6swjJHMqzDZkmv36jIOZ-RZOQZ8zFHjTQ30gjbYJ5lfKQPTbBZiTMgAAPXJYQIojQhUIk40Ax3ZNPt2QYeRzqOo1wlNtsJxnAqVUyrr8nGLAKvc0IsrnmiBU2mGQzVXjBkAJVNioFciy2SMK-UgJMkQHIztxb2iq0ZnDvLlyV5Vvq4OXtDhXi9tedYKz044L-JGq1aRqwLXkJfjviSimw
        2. Wagyu Beef Burger (315 orders) - Image: https://lh3.googleusercontent.com/aida-public/AB6AXuBYZWaG1AbVixAv8zFANqFtSvP5GkV5HckPrhFFygGszJUmaeJjZgmALrKroIszGsLbrXumSBuDDw3VWlna2Y7Ilt2u5gbIUSZtZ5xKP_75mhbaxZgjfBoNTReMNcxs1mIQxYZXvonq75qfb0rujxpm7CW44IzpOvcXaecqQxafb7ZcsUGXWyWDsp8ua98JRy9to8jKYTOiHEYMclks5IfqjxY0qkAWjTRXm4Cff48GcOAFclHRyOzFo8PsprGizmmhmBqoL-DmJ-uF
        3. Miso Glazed Salmon (280 orders) - Image: https://lh3.googleusercontent.com/aida-public/AB6AXuBSHM0VwWNEbUNmTutBquD_MGYhCrt6mEvssk6ZrCdBsLGDbcLKG_hWFJ6N1ZMPyuGqdhIFkX0HwXtrFegc0X2bUUOmojDs0tqMnHt9xyTs7V1qXwMwVLaAhTuqqod9dlCUrFgftM4UckxsE_1F8nV2pisvbo3ZNKdC05ryanyCEbw_SIRXHaF1Sb5aWY2N85rsut2p3J7Q3hicBmBgClg6vTG0zLYLXErrN5Pt8o-IQCYSkMCKyz1ZW-CnhRQtyzVFsIYR_7cIupeH
      - Kitchen Status: 8 orders currently being prepared.
      - Staff: Alex Morgan (Master Chef), Marco Vieri (Manager).
      
      Sales Trend (Last 7 Days):
      - Mon: $18,200
      - Tue: $19,500
      - Wed: $21,000
      - Thu: $24,850 (Today)
      - Fri: $28,000 (Projected)
      - Sat: $32,000 (Projected)
      - Sun: $26,000 (Projected)
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are the RestoAdmin AI Assistant. You help the restaurant manager (Marco) with business insights and data. 
        Use the following context to answer questions: ${restaurantContext}. 
        
        CRITICAL INSTRUCTIONS:
        1. For data trends or comparisons, ALWAYS include a JSON block for a chart. Use this format:
           [CHART:{"type":"bar"|"line"|"pie","data":[{"name":"Label","value":123},...],"title":"Chart Title"}]
        2. For dish suggestions or mentions, ALWAYS include the image URL if available in the context. Use this format:
           [IMAGE:{"url":"https://...","alt":"Dish Name","caption":"Description"}]
        3. Keep text professional and concise.
        4. Use Markdown for formatting text (bold, lists).`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Admin API Error:", error);
    return "I'm sorry, I'm having trouble accessing the live data right now.";
  }
}
