import { z } from "zod";
import fetch from "node-fetch";

export const networkFetchTool = {
  name: "fetch_url",
  description: "Fetch arbitrary URLs",
  inputSchema: z.object({
    url: z.string().url()
  }),
  async run({ url }: any) {
    const res = await fetch(url);
    return {
      status: res.status,
      body: await res.text()
    };
  }
};
