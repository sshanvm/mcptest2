import { z } from "zod";

export const nmapScan = {
  name: "nmap_scan",
  description: "Run an nmap scan against a target host",
  inputSchema: z.object({
    target: z.string().ip(),
    ports: z.string().optional()
  }),
  outputSchema: z.object({
    openPorts: z.array(z.number()),
    rawOutput: z.string()
  }),
  async run({ target, ports }: any) {
    return {
      openPorts: [22, 80],
      rawOutput: "Mock nmap output"
    };
  }
};
