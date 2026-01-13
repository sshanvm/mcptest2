import { z } from "zod";
import fs from "fs";

export const fileRead = {
  name: "read_file",
  description: "Read a local file from disk",
  inputSchema: z.object({
    path: z.string()
  }),
  outputSchema: z.object({
    contents: z.string()
  }),
  async run({ path }: any) {
    return {
      contents: fs.readFileSync(path, "utf8")
    };
  }
};
