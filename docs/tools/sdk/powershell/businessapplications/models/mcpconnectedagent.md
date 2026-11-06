# Mcpconnectedagent

# Mcpconnectedagent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | **String** | Native identity of the AI agent, as aggregated from the source. | [optional] 
**Description** | **String** | AI agent description. | [optional] 
**Attributes** | **map[string]AnyType** | Map of custom machine identity attributes. | [optional] 
**Subtype** | **String** | Machine identity subtype. | [optional] 
**Owners** | [**MCPConnectedAgentOwners**](mcp-connected-agent-owners) |  | [optional] 
**SourceId** | **String** | ID of the source the AI agent was aggregated from. | [optional] 
**Uuid** | **String** | UUID of the AI agent, as aggregated from the source. | [optional] 
**DatasetId** | **String** | Dataset ID of the source the AI agent was aggregated from. | [optional] 
**Source** | [**MCPConnectedAgentSource**](mcp-connected-agent-source) |  | [optional] 
**ManuallyEdited** | **Boolean** | Indicates whether the AI agent has been manually edited. | [optional] [default to $false]
**ManuallyCreated** | **Boolean** | Indicates whether the AI agent was manually created. | [optional] [default to $false]
**ExistsOnSource** |  **Enum** [  "TRUE",    "FALSE",    "NOT_APPLICABLE" ] | Whether the AI agent still exists on its source. | [optional] 
**UserEntitlements** | [**[]MCPConnectedAgentUserEntitlements**](mcp-connected-agent-user-entitlements) | User entitlements associated with the AI agent. | [optional] 
**BusinessApplicationRefs** | [**[]MCPConnectedAgentBusinessApplicationRefs**](mcp-connected-agent-business-application-refs) | Business Applications the AI agent is linked to. Omitted when Business Application context is not available for the tenant. | [optional] 
**EffectiveSanctionedStatus** | **SanctionedStatus** | Sanctioned status the AI agent inherits from its linked Business Applications. Omitted when Business Application context is not available for the tenant. | [optional] 

## Examples

- Prepare the resource
```powershell
$Mcpconnectedagent = Initialize-Mcpconnectedagent  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -NativeIdentity abc:123:dddd `
 -Description Code review assistant. `
 -Attributes {"Region":"EU"} `
 -Subtype AI Agent `
 -Owners null `
 -SourceId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -Uuid f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -DatasetId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Source null `
 -ManuallyEdited false `
 -ManuallyCreated false `
 -ExistsOnSource TRUE `
 -UserEntitlements null `
 -BusinessApplicationRefs null `
 -EffectiveSanctionedStatus null
```

- Convert the resource to JSON
```powershell
$Mcpconnectedagent | ConvertTo-JSON
```


[[Back to top]](#) 

