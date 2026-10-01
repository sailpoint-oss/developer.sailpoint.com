# Campaign2AllOfSearchCampaignInfoReviewer

# Campaign2AllOfSearchCampaignInfoReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | The reviewer's DTO type. | [optional] 
**Id** | **String** | The reviewer's ID. | [optional] 
**Name** | **String** | The reviewer's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfSearchCampaignInfoReviewer = Initialize-Campaign2AllOfSearchCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfSearchCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

