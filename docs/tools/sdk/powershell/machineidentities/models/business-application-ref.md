# BusinessApplicationRef

# BusinessApplicationRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "BUSINESS_APPLICATION" ] | Reference type. Must be `BUSINESS_APPLICATION`. | [required]
**Id** | **String** | Existing Business Application id in the tenant. | [required]
**Name** | **String** | Business Application display name. Ignored on write; responses are enriched from the Business Application. | [optional] 
**SanctionedStatus** | **SanctionedStatus** | Sanctioned status of the linked Business Application. Ignored on write; responses are enriched from the Business Application. | [optional] [readonly] 
**CorrelationType** | **CorrelationType** | Correlation type for this reference. On write: omit or `MANUAL` (default). `AUTOMATIC` is rejected (`400`). On response: may be `MANUAL` or `AUTOMATIC`. | [optional] 

## Examples

- Prepare the resource
```powershell
$BusinessApplicationRef = Initialize-BusinessApplicationRef  -Type BUSINESS_APPLICATION `
 -Id 2ee5e239-e68c-4d69-93fb-6c7ce4576190 `
 -Name Cursor `
 -SanctionedStatus null `
 -CorrelationType null
```

- Convert the resource to JSON
```powershell
$BusinessApplicationRef | ConvertTo-JSON
```


[[Back to top]](#) 

