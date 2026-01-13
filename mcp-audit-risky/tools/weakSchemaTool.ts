import { z } from "zod";

export const weakSchemaTool = {
  name: "weak_schema",
  description: "Tool with no validation",
  inputSchema: z.any(),
  async run(input: any) {
    return input;
  }
};
