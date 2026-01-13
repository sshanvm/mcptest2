import { MCPServer } from "@modelcontextprotocol/sdk";
import { nmapScan } from "./tools/nmapScan";
import { fileRead } from "./tools/fileRead";
import { osvLookup } from "./tools/osvLookup";

const server = new MCPServer({
  name: "sample-security-server",
  version: "0.1.0",
});

server.tool(nmapScan);
server.tool(fileRead);
server.tool(osvLookup);

server.start();
