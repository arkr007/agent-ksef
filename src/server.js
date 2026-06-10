"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = buildServer;
const fastify_1 = __importDefault(require("fastify"));
const zod_1 = require("zod");
const ai_routes_1 = require("./routes/ai.routes");
const app_error_1 = require("./errors/app-error");
const health_schema_1 = require("./schemas/health.schema");
function buildServer() {
    const app = (0, fastify_1.default)({
        logger: true,
    });
    app.setErrorHandler((error, request, reply) => {
        request.log.error(error);
        if (error instanceof zod_1.ZodError) {
            return reply.status(400).send({
                error: "Validation error",
                details: error.issues,
            });
        }
        if (error instanceof app_error_1.AppError) {
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
        return health_schema_1.healthResponseSchema.parse(response);
    });
    app.register(ai_routes_1.aiRoutes);
    return app;
}
//# sourceMappingURL=server.js.map