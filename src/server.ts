import Fastify from "fastify";
import { aiRoutes } from "./routes/ai.routes";

export function buildServer() {
  const app = Fastify({
    logger: true,
  });

  app.get("/", async () => {
    return {
      status: "ok",
      name: "agent-ksef",
    };
  });

  app.register(aiRoutes);

  return app;
}