# MCPServer

# MCPServer

Import this model from the entry point of its package:

```typescript
import { MCPServer } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | MCP server ID. | [default to undefined]
**serverName** | **(optional)** `string` | MCP server name. | [default to undefined]
**sanctionedStatus** | **(optional)** `SanctionedStatus` | Sanctioned status of the MCP server. MCP servers are currently always `UNKNOWN`. | [default to undefined]
**description** | **(optional)** `string` | MCP server description. | [default to undefined]
**version** | **(optional)** `string` | MCP server version. | [default to undefined]
**remotes** | **(optional)** `Array<string>` | Remote endpoints the MCP server can be reached at. | [default to undefined]
**packages** | **(optional)** `Array<MCPPackage>` | Packages the MCP server can be installed or launched from. | [default to undefined]
**connectedAgentCount** | **(optional)** `number` | Number of AI agents connected to the MCP server. | [default to undefined]
**created** | **(optional)** `string` | Date and time the MCP server was created. | [default to undefined]
**modified** | **(optional)** `string` | Date and time the MCP server was last modified. | [default to undefined]

