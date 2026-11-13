# Campaign2AllOfRoleCompositionCampaignInfoReviewer

# Campaign2AllOfRoleCompositionCampaignInfoReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | The reviewer's DTO type. | [optional] 
**Id** | **String** | The reviewer's ID. | [optional] 
**Name** | **String** | The reviewer's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfRoleCompositionCampaignInfoReviewer = Initialize-Campaign2AllOfRoleCompositionCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfRoleCompositionCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

