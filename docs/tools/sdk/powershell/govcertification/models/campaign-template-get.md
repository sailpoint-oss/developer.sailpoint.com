# CampaignTemplateGet

# CampaignTemplateGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the campaign template | [required]
**Name** | **String** | Name of the campaign template. | [required]
**Description** | **String** | Description of the campaign template. | [required]
**Type** | **CampaignType** |  | [required]
**OwnerId** | **String** | The owner of this template, and the owner of campaigns generated from this template via a schedule. This field is automatically populated at creation time with the current user. | [required][readonly] 
**RemediatorRef** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**MandatoryCommentRequirement** | **CampaignMandatoryCommentRequirement** |  | [optional] 
**EmailNotificationEnabled** | **Boolean** | Enables email notification for this campaign | [optional] [default to $false]
**AutoRevokeAllowed** | **Boolean** | Allows auto revoke for this campaign | [optional] [default to $false]
**RecommendationsEnabled** | **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to $false]
**SunsetCommentsRequired** | **Boolean** | Determines if comments on sunset date changes are required. | [optional] [default to $true]
**Reviewer** | [**Reviewer**](reviewer) |  | [required]
**DeadlineDuration** | **String** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was ""P2W"" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). If it is passed as empty then deadline is not set, but this need to be set before campaign activation api by using PATCH operation | [optional] 
**CampaignName** | **String** | The campaign name. | [required]
**CampaignDescription** | **String** | The campaign description. | [required]
**FilterRef** | [**CampaignFilterRef**](campaign-filter-ref) |  | [optional] 
**SearchBasedParams** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**SourceIds** | **[]String** | A direct list of sourceIds to include in this campaign. | [optional] 
**Schedule** | [**Schedule**](schedule) |  | [optional] 
**ScheduleStatus** |  **Enum** [  "NOT_SCHEDULED",    "SCHEDULING",    "SCHEDULED",    "SCHEDULE_FAILED" ] | Used to determine current status of campaign template schedule | [optional] [readonly] 
**ScheduleError** | **String** | Details about scheduling error | [optional] [readonly] 
**Created** | **System.DateTime** | Creation date of Campaign Template | [required][readonly] 
**Modified** | **System.DateTime** | Modification date of Campaign Template | [required][readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignTemplateGet = Initialize-CampaignTemplateGet  -Id 2c9079b2-70a2-66a6-a170-a277bb960008 `
 -Name Manager Campaign Template `
 -Description Template for the annual manager campaign. `
 -Type null `
 -OwnerId 2c918086676d3e0601677611dbde220f `
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
 -SourceIds ["0fbe863c063c4c88a35fd7f17e8a3df5"] `
 -Schedule null `
 -ScheduleStatus SCHEDULED `
 -ScheduleError Failed to schedule campaign template due to invalid scheduling details `
 -Created 2020-03-05T22:44:00.364Z `
 -Modified 2020-03-05T22:52:09.969Z
```

- Convert the resource to JSON
```powershell
$CampaignTemplateGet | ConvertTo-JSON
```


[[Back to top]](#) 

