import "dotenv/config";
import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

const port = Number(process.env.APP_PORT ?? 3000);

app.get("/", async () => {
  return {
    status: "ok",
    name: "agent-ksef",
  };
});

app.listen({ port }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Server działa: ${address}`);
});