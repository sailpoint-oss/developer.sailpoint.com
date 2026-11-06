# CampaignGeneratedCampaignCampaignOwner

# CampaignGeneratedCampaignCampaignOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity. | [required]
**DisplayName** | **String** | The display name of the identity. | [required]
**Email** | **String** | The primary email address of the identity. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignGeneratedCampaignCampaignOwner = Initialize-CampaignGeneratedCampaignCampaignOwner  -Id 37f080867702c1910177031320c40n27 `
 -DisplayName John Snow `
 -Email john.snow@example.com
```

- Convert the resource to JSON
```powershell
$CampaignGeneratedCampaignCampaignOwner | ConvertTo-JSON
```


[[Back to top]](#) 

