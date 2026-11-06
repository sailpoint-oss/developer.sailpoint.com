# Capability

# Capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | Description of the capability. | [optional] 
**Type** |  **Enum** [  "MCP",    "TOOL",    "SKILL",    "PLUGIN",    "PROCESS",    "UNDEFINED" ] | The capability type. UNDEFINED is returned when the source does not report a known type. | [optional] 
**Status** | **String** | The capability status reported by the source. | [optional] 
**NativeIdentity** | **String** | The capability's unique identifier on the source. | [optional] 
**Environment** | **String** | The environment the capability belongs to. | [optional] 
**Source** | [**CapabilityAllOfSource**](capability-all-of-source) |  | [optional] 
**Resource** | [**CapabilityResource**](capability-resource) |  | [optional] 
**DatasetId** | **String** | The ID of the source dataset the capability was retrieved from. | [optional] 
**Owners** | [**CapabilityOwners**](capability-owners) |  | [optional] 
**Attributes** | **map[string]AnyType** | A map of curated capability attributes. | [optional] 
**ConnectorAttributes** | **map[string]AnyType** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | **Boolean** | Indicates if the capability has been manually edited. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Capability = Initialize-Capability  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Description MCP server that exposes the ticketing tools `
 -Type MCP `
 -Status Active `
 -NativeIdentity mcp-ticketing-01 `
 -Environment production `
 -Source null `
 -Resource null `
 -DatasetId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Owners null `
 -Attributes {"status":"Active"} `
 -ConnectorAttributes {"endpoint":"https://mcp.example.com/ticketing"} `
 -ManuallyEdited true
```

- Convert the resource to JSON
```powershell
$Capability | ConvertTo-JSON
```


[[Back to top]](#) 

