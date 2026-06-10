import Fastify from "fastify";
import { aiRoutes } from "./routes/ai.routes";
import { healthResponseSchema } from "./schemas/health.schema";

export function buildServer() {
  const app = Fastify({
    logger: true,
  });

  app.get("/", async () => {
    const response = {
      status: "ok",
      name: "agent-ksef",
    };

    return healthResponseSchema.parse(response);
  });

  app.register(aiRoutes);

  return app;
}