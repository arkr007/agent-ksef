import Fastify from "fastify";
import { ZodError } from "zod";
import { aiRoutes } from "./routes/ai.routes";
import { AppError } from "./errors/app-error";
import { healthResponseSchema } from "./schemas/health.schema";

export function buildServer() {
  const app = Fastify({
    logger: true,
  });

  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    if (error instanceof ZodError) {
      return reply.status(400).send({
        error: "Validation error",
        details: error.issues,
      });
    }

    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        error: error.message,
      });
    }

    return reply.status(500).send({
      error: "Internal server error",
    });
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