import "dotenv/config";
import { buildServer } from "./server";

const port = Number(process.env.APP_PORT ?? 3000);

const app = buildServer();

app.listen({ port }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Server działa: ${address}`);
});