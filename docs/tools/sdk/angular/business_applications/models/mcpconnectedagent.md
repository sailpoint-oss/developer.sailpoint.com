# Mcpconnectedagent

# Mcpconnectedagent

Import this model from the entry point of its package:

```typescript
import { Mcpconnectedagent } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identity of the AI agent, as aggregated from the source. | [default to undefined]
**description** | **(optional)** `string` | AI agent description. | [default to undefined]
**attributes** | **(optional)**  | Map of custom machine identity attributes. | [default to undefined]
**subtype** | **(optional)** `string` | Machine identity subtype. | [default to undefined]
**owners** | **(optional)** `MCPConnectedAgentOwners` |  | [default to undefined]
**sourceId** | **(optional)** `string` | ID of the source the AI agent was aggregated from. | [default to undefined]
**uuid** | **(optional)** `string` | UUID of the AI agent, as aggregated from the source. | [default to undefined]
**datasetId** | **(optional)** `string` | Dataset ID of the source the AI agent was aggregated from. | [default to undefined]
**source** | **(optional)** `MCPConnectedAgentSource` |  | [default to undefined]
**manuallyEdited** | **(optional)** `boolean` | Indicates whether the AI agent has been manually edited. | [default to false]
**manuallyCreated** | **(optional)** `boolean` | Indicates whether the AI agent was manually created. | [default to false]
**existsOnSource** | **(optional)** `string` | Whether the AI agent still exists on its source. | [default to undefined]
**userEntitlements** | **(optional)** `Array<MCPConnectedAgentUserEntitlements>` | User entitlements associated with the AI agent. | [default to undefined]
**businessApplicationRefs** | **(optional)** `Array<MCPConnectedAgentBusinessApplicationRefs>` | Business Applications the AI agent is linked to. Omitted when Business Application context is not available for the tenant. | [default to undefined]
**effectiveSanctionedStatus** | **(optional)** `SanctionedStatus` | Sanctioned status the AI agent inherits from its linked Business Applications. Omitted when Business Application context is not available for the tenant. | [default to undefined]

