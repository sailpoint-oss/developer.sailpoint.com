# Intelnhicapabilitywire

# Intelnhicapabilitywire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of the linked capability. | [required]
**Name** | **String** | Display name of the capability. Empty string when the name is not available. | [required]
**Type** |  **Enum** [  "MCP",    "TOOL",    "SKILL" ] | Kind of capability. | [required]
**SourceName** | **String** | Name of the source where the capability was discovered. Empty string when not available. | [required]

## Examples

- Prepare the resource
```powershell
$Intelnhicapabilitywire = Initialize-Intelnhicapabilitywire  -Id 7c2a9e14-6b3f-4d18-9a27-0e5f8c1b4d63 `
 -Name example inventory tool `
 -Type TOOL `
 -SourceName Example Source
```

- Convert the resource to JSON
```powershell
$Intelnhicapabilitywire | ConvertTo-JSON
```


[[Back to top]](#) 

