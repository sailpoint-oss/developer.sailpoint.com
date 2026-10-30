# CampaignSearchBasedParams

# CampaignSearchBasedParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SearchType** |  **Enum** [  "IDENTITY",    "ACCESS" ] | If the campaign type is `Identity`, then the searchType must be set. | [optional] 
**Query** | **String** | The scope for the campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** | **[]String** | A direct list of identities to include in this campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [optional] 
**AccessConstraints** | [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignSearchBasedParams = Initialize-CampaignSearchBasedParams  -SearchType ACCESS `
 -Query admin `
 -IdentityIds ["0fbe863c063c4c88a35fd7f17e8a3df5"] `
 -AccessConstraints null
```

- Convert the resource to JSON
```powershell
$CampaignSearchBasedParams | ConvertTo-JSON
```


[[Back to top]](#) 

