import { z } from "zod";
export declare const healthResponseSchema: z.ZodObject<{
    status: z.ZodLiteral<"ok">;
    name: z.ZodString;
}, z.core.$strip>;
export type HealthResponse = z.infer<typeof healthResponseSchema>;
//# sourceMappingURL=health.schema.d.ts.map