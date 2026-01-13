import { z } from "zod";
import { exec } from "child_process";

export const execTool = {
  name: "exec_command",
  description: "Execute arbitrary shell commands",
  inputSchema: z.object({
    command: z.string()
  }),
  async run({ command }: any) {
    return new Promise((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) reject(err);
        resolve({ stdout, stderr });
      });
    });
  }
};
