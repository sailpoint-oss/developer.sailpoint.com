# CampaignTemplateCreate

# CampaignTemplateCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the campaign template. | [required]
**Description** | **String** | Description of the campaign template. | [required]
**Type** | **CampaignType** |  | [required]
**RemediatorRef** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**MandatoryCommentRequirement** | **CampaignMandatoryCommentRequirement** |  | [optional] 
**EmailNotificationEnabled** | **Boolean** | Enables email notification for this campaign | [required][default to $false]
**AutoRevokeAllowed** | **Boolean** | Allows auto revoke for this campaign | [required][default to $false]
**RecommendationsEnabled** | **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [required][default to $false]
**SunsetCommentsRequired** | **Boolean** | Determines if comments on sunset date changes are required. | [required][default to $true]
**Reviewer** | [**Reviewer**](reviewer) |  | [required]
**DeadlineDuration** | **String** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was ""P2W"" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**CampaignName** | **String** | The campaign name. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**CampaignDescription** | **String** | The campaign description. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**FilterRef** | [**CampaignFilterIdRef**](campaign-filter-id-ref) |  | [optional] 
**SearchBasedParams** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**SourceIds** | **[]String** | A direct list of sourceIds to include in this campaign. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignTemplateCreate = Initialize-CampaignTemplateCreate  -Name Manager Campaign Template `
 -Description Template for the annual manager campaign. `
 -Type null `
 -RemediatorRef null `
 -MandatoryCommentRequirement null `
 -EmailNotificationEnabled false `
 -AutoRevokeAllowed false `
 -RecommendationsEnabled true `
 -SunsetCommentsRequired true `
 -Reviewer null `
 -DeadlineDuration P2W `
 -CampaignName Manager Campaign `
 -CampaignDescription Everyone needs to be reviewed by their manager `
 -FilterRef null `
 -SearchBasedParams null `
 -SourceIds ["0fbe863c063c4c88a35fd7f17e8a3df5"]
```

- Convert the resource to JSON
```powershell
$CampaignTemplateCreate | ConvertTo-JSON
```


[[Back to top]](#) 

