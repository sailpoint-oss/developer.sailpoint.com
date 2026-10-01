# Campaign2AllOfSearchCampaignInfo

# Campaign2AllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "ACCESS" ] | The type of search campaign represented. | [required]
**Description** | **String** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**Reviewer** | [**Campaign2AllOfSearchCampaignInfoReviewer**](campaign2-all-of-search-campaign-info-reviewer) |  | [optional] 
**Query** | **String** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** | **[]String** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**AccessConstraints** | [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfSearchCampaignInfo = Initialize-Campaign2AllOfSearchCampaignInfo  -Type ACCESS `
 -Description Search Campaign description `
 -Reviewer null `
 -Query Search Campaign query description `
 -IdentityIds ["0fbe863c063c4c88a35fd7f17e8a3df5"] `
 -AccessConstraints null
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfSearchCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

