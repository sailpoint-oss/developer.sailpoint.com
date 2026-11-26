# CampaignCreate

# CampaignCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the campaign. | [required]
**Description** | **String** | Description of the campaign. | [required]
**Deadline** | **System.DateTime** | The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [optional] 
**DeadlineTimezone** | **String** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**EmailNotificationEnabled** | **Boolean** | Enables email notification for this campaign | [required][default to $false]
**AutoRevokeAllowed** | **Boolean** | Allows auto revoke for this campaign | [required][default to $false]
**RecommendationsEnabled** | **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [required][default to $false]
**SunsetCommentsRequired** | **Boolean** | Determines if comments on sunset date changes are required. | [required][default to $true]
**SourceIds** | **[]String** | A direct list of sourceIds to include in this campaign. | [optional] 
**AutoActivate** | **Boolean** | If autoActivate is true, the campaign will be activated automatically after generation completes. In this case, a deadline must be provided; otherwise, campaign creation will fail. | [required][default to $false]
**Type** | **CampaignType** |  | [required]
**Reviewer** | [**Reviewer**](reviewer) |  | [required]
**FilterRef** | [**CampaignFilterIdRef**](campaign-filter-id-ref) |  | [optional] 
**InlineFilter** | [**CampaignFilterInline**](campaign-filter-inline) |  | [optional] 
**SearchBasedParams** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**RemediatorRef** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**MandatoryCommentRequirement** | **CampaignMandatoryCommentRequirement** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignCreate = Initialize-CampaignCreate  -Name Manager Campaign `
 -Description Everyone needs to be reviewed by their manager `
 -Deadline Sun Mar 15 00:00:00 UTC 2020 `
 -DeadlineTimezone -05:00 `
 -EmailNotificationEnabled false `
 -AutoRevokeAllowed false `
 -RecommendationsEnabled true `
 -SunsetCommentsRequired true `
 -SourceIds ["0fbe863c063c4c88a35fd7f17e8a3df5"] `
 -AutoActivate true `
 -Type null `
 -Reviewer null `
 -FilterRef null `
 -InlineFilter null `
 -SearchBasedParams null `
 -RemediatorRef null `
 -MandatoryCommentRequirement null
```

- Convert the resource to JSON
```powershell
$CampaignCreate | ConvertTo-JSON
```


[[Back to top]](#) 

