import { z } from "zod";

export const osvLookup = {
  name: "osv_lookup",
  description: "Lookup vulnerabilities in OSV database",
  inputSchema: z.object({
    package: z.string(),
    version: z.string()
  }),
  outputSchema: z.object({
    vulnerabilities: z.array(
      z.object({
        id: z.string(),
        summary: z.string()
      })
    )
  }),
  async run() {
    return {
      vulnerabilities: []
    };
  }
};
