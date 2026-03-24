import z from "zod/v4";

export const backendErrorSchema = z.object({
  message: z.string(),
});
