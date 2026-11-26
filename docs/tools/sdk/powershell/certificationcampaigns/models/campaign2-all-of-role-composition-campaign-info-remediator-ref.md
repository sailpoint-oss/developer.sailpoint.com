# Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef

# Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Legal Remediator Type | [required]
**Id** | **String** | The ID of the remediator. | [required]
**Name** | **String** | The name of the remediator. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef = Initialize-Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef  -Type IDENTITY `
 -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Name Role Admin
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef | ConvertTo-JSON
```


[[Back to top]](#) 

