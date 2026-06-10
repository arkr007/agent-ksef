"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAiTest = runAiTest;
const openai_1 = __importDefault(require("openai"));
function getOpenAiClient() {
    return new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY,
    });
}
async function runAiTest() {
    const openai = getOpenAiClient();
    const response = await openai.responses.create({
        model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
        input: "Napisz jedno krótkie zdanie: do czego może służyć agent KSeF?",
    });
    return response.output_text;
}
//# sourceMappingURL=openai.service.js.map