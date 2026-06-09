import "dotenv/config";
import Fastify from "fastify";
import OpenAI from "openai";

const app = Fastify({
  logger: true,
});

const port = Number(process.env.APP_PORT ?? 3000);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", async () => {
  return {
    status: "ok",
    name: "agent-ksef",
  };
});

app.post("/ai/test", async () => {
  const response = await openai.responses.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    input: "Napisz jedno krótkie zdanie: do czego może służyć agent KSeF?",
  });

  return {
    output: response.output_text,
  };
});

app.listen({ port }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Server działa: ${address}`);
});