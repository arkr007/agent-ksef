import { describe, expect, it } from "vitest";
import { buildServer } from "../src/server";

describe("health endpoint", () => {
  it("returns app status", async () => {
    const app = buildServer();

    const response = await app.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      status: "ok",
      name: "agent-ksef",
    });
  });
});