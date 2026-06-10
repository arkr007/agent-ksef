"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiRoutes = aiRoutes;
const openai_service_1 = require("../services/openai.service");
async function aiRoutes(app) {
    app.post("/ai/test", async () => {
        const output = await (0, openai_service_1.runAiTest)();
        return {
            output,
        };
    });
}
//# sourceMappingURL=ai.routes.js.map