import { z } from "zod";

export const FileReadSchema = z.object({
  path: z.string()
});
