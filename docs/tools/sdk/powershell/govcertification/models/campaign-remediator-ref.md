# CampaignRemediatorRef

# CampaignRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the remediator. | [required]
**Name** | **String** | The name of the remediator. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignRemediatorRef = Initialize-CampaignRemediatorRef  -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Name Role Admin
```

- Convert the resource to JSON
```powershell
$CampaignRemediatorRef | ConvertTo-JSON
```


[[Back to top]](#) 

