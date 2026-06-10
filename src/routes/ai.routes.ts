import type { FastifyInstance } from "fastify";
import { runAiTest } from "../services/openai.service";

export async function aiRoutes(app: FastifyInstance) {
  app.post("/ai/test", async () => {
    const output = await runAiTest();

    return {
      output,
    };
  });
}
