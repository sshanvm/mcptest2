import { MCPServer } from "@modelcontextprotocol/sdk";
import { execTool } from "../tools/execTool";
import { fileReadTool } from "../tools/fileReadTool";
import { networkFetchTool } from "../tools/networkFetchTool";
import { weakSchemaTool } from "../tools/weakSchemaTool";

const server = new MCPServer({
  name: "risky-server",
  version: "1.0.0"
});

server.tool(execTool);
server.tool(fileReadTool);
server.tool(networkFetchTool);
server.tool(weakSchemaTool);

server.start();
