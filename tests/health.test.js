"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const server_1 = require("../src/server");
(0, vitest_1.describe)("health endpoint", () => {
    (0, vitest_1.it)("returns app status", async () => {
        const app = (0, server_1.buildServer)();
        const response = await app.inject({
            method: "GET",
            url: "/",
        });
        (0, vitest_1.expect)(response.statusCode).toBe(200);
        (0, vitest_1.expect)(response.json()).toEqual({
            status: "ok",
            name: "agent-ksef",
        });
    });
});
//# sourceMappingURL=health.test.js.map