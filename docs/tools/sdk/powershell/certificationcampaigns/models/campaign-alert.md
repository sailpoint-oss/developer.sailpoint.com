# CampaignAlert

# CampaignAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** |  **Enum** [  "ERROR",    "WARN",    "INFO" ] | Denotes the level of the message | [optional] 
**Localizations** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAlert = Initialize-CampaignAlert  -Level ERROR `
 -Localizations null
```

- Convert the resource to JSON
```powershell
$CampaignAlert | ConvertTo-JSON
```


[[Back to top]](#) 

