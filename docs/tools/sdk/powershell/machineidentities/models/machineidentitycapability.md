# Machineidentitycapability

# Machineidentitycapability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | Description of the capability. | [optional] 
**Type** |  **Enum** [  "MCP",    "TOOL",    "SKILL",    "PLUGIN",    "PROCESS",    "UNDEFINED" ] | Type of the capability. `UNDEFINED` is returned when the type is missing or not recognized. | [optional] 
**Status** | **String** | Status of the capability, as reported by the source. `null` when the source does not report one. | [optional] 
**NativeIdentity** | **String** | Unique identifier of the capability on the source. | [optional] 
**Environment** | **String** | Environment the capability runs in. | [optional] 
**Source** | [**MachineIdentityCapabilitySource**](machine-identity-capability-source) |  | [optional] 
**Resource** | [**ResourceV2**](resource-v2) |  | [optional] 
**DatasetId** | **String** | ID of the source dataset the capability was aggregated from. | [optional] 
**Owners** | [**MachineIdentityOwnersV2**](machine-identity-owners-v2) |  | [optional] 
**Attributes** | **map[string]AnyType** | A map of curated capability attributes. | [optional] 
**ConnectorAttributes** | **map[string]AnyType** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | **Boolean** | Indicates whether the capability has been manually edited. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Machineidentitycapability = Initialize-Machineidentitycapability  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Description Reads customer records from the CRM `
 -Type TOOL `
 -Status active `
 -NativeIdentity crm-reader-tool `
 -Environment production `
 -Source null `
 -Resource null `
 -DatasetId agents-dataset `
 -Owners null `
 -Attributes {"status":"active"} `
 -ConnectorAttributes {"toolVersion":"1.4"} `
 -ManuallyEdited false
```

- Convert the resource to JSON
```powershell
$Machineidentitycapability | ConvertTo-JSON
```


[[Back to top]](#) 

