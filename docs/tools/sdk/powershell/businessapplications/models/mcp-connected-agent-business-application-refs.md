# MCPConnectedAgentBusinessApplicationRefs

# MCPConnectedAgentBusinessApplicationRefs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "BUSINESS_APPLICATION" ] | Reference type. | [optional] 
**Id** | **String** | Business Application ID. | [optional] 
**Name** | **String** | Business Application name. | [optional] 
**SanctionedStatus** | **SanctionedStatus** | Sanctioned status of the linked Business Application. | [optional] 
**CorrelationType** |  **Enum** [  "MANUAL",    "AUTOMATIC" ] | Whether the link was assigned manually or correlated automatically. | [optional] 

## Examples

- Prepare the resource
```powershell
$MCPConnectedAgentBusinessApplicationRefs = Initialize-MCPConnectedAgentBusinessApplicationRefs  -Type BUSINESS_APPLICATION `
 -Id 2ee5e239-e68c-4d69-93fb-6c7ce4576190 `
 -Name Cursor `
 -SanctionedStatus null `
 -CorrelationType AUTOMATIC
```

- Convert the resource to JSON
```powershell
$MCPConnectedAgentBusinessApplicationRefs | ConvertTo-JSON
```


[[Back to top]](#) 

