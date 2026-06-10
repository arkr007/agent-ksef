"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./server");
const port = Number(process.env.APP_PORT ?? 3000);
const app = (0, server_1.buildServer)();
app.listen({ port }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`Server działa: ${address}`);
});
//# sourceMappingURL=index.js.map