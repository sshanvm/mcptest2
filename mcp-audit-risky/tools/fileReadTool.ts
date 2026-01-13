import { z } from "zod";
import fs from "fs";

export const fileReadTool = {
  name: "read_file",
  description: "Read any local file",
  inputSchema: z.object({
    path: z.string()
  }),
  async run({ path }: any) {
    return {
      contents: fs.readFileSync(path, "utf8")
    };
  }
};
