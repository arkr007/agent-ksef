import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAiTest(): Promise<string> {
  const response = await openai.responses.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    input: "Napisz jedno krótkie zdanie: do czego może służyć agent KSeF?",
  });

  return response.output_text;
}
