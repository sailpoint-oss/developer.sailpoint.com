# CampaignGet

# CampaignGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the campaign | [optional] [readonly] 
**Name** | **String** | The campaign name. | [required]
**Description** | **String** | The campaign description. | [required]
**Deadline** | **System.DateTime** | The campaign's completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [optional] 
**DeadlineTimezone** | **String** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**DeadlineTime** | **System.DateTime** | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [optional] 
**EmailNotificationEnabled** | **Boolean** | Enables email notification for this campaign | [optional] [default to $false]
**AutoRevokeAllowed** | **Boolean** | Allows auto revoke for this campaign | [optional] [default to $false]
**AutoActivate** | **Boolean** | If true, the campaign is set to activate automatically after generation completes. Campaigns stored without this attribute default to false. | [optional] [default to $false]
**RecommendationsEnabled** | **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to $false]
**SunsetCommentsRequired** | **Boolean** | Determines if comments on sunset date changes are required. | [optional] [default to $true]
**Type** | **CampaignType** |  | [required]
**Reviewer** | [**Reviewer**](reviewer) |  | [required]
**Alerts** | [**[]Alert**](alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**FilterRef** | [**CampaignFilterRef**](campaign-filter-ref) |  | [optional] 
**InlineFilter** | [**CampaignFilterInline**](campaign-filter-inline) |  | [optional] 
**SearchBasedParams** | [**CampaignSearchBasedParams**](campaign-search-based-params) |  | [optional] 
**RemediatorRef** | [**CampaignRemediatorRef**](campaign-remediator-ref) |  | [optional] 
**OwnerId** | **String** | The campaign owner is the Identity that created the campaign. | [optional] 
**Created** | **System.DateTime** | Created time of the campaign | [optional] [readonly] 
**Modified** | **System.DateTime** | Modified time of the campaign | [optional] [readonly] 
**TotalCertifications** | **Int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | **Int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**MandatoryCommentRequirement** | **CampaignMandatoryCommentRequirement** |  | [optional] 
**Status** |  **Enum** [  "PENDING",    "STAGED",    "CANCELING",    "ACTIVATING",    "ACTIVE",    "COMPLETING",    "COMPLETED",    "ERROR" ] | The campaign's current status. | [optional] [readonly] 
**LatestReports** | [**map[string]CampaignLatestReport**](campaign-latest-report) | A map of the latest report for each report type | [optional] 
**SourceIds** | **[]String** | A direct list of sourceIds to include in this campaign. | [optional] 
**SourcesWithOrphanEntitlements** | [**[]CampaignOrphanEntitlementSource**](campaign-orphan-entitlement-source) | Sources that have orphan entitlement line items for this campaign, as supplied when the campaign finished staging. Each entry identifies a source by id and name. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignGet = Initialize-CampaignGet  -Id 2c9079b2-70a2-66a6-a170-a2779fcb0007 `
 -Name Manager Campaign `
 -Description Everyone needs to be reviewed by their manager `
 -Deadline Sun Mar 15 00:00:00 UTC 2020 `
 -DeadlineTimezone -05:00 `
 -DeadlineTime 2018-10-19T13:49:37.385Z `
 -EmailNotificationEnabled false `
 -AutoRevokeAllowed false `
 -AutoActivate false `
 -RecommendationsEnabled true `
 -SunsetCommentsRequired true `
 -Type null `
 -Reviewer null `
 -Alerts null `
 -FilterRef null `
 -InlineFilter null `
 -SearchBasedParams null `
 -RemediatorRef null `
 -OwnerId 4030ca72bdfb4980b51b8fcee948be50 `
 -Created 2020-03-03T22:15:13.611Z `
 -Modified 2020-03-03T22:20:12.674Z `
 -TotalCertifications 100 `
 -CompletedCertifications 10 `
 -MandatoryCommentRequirement null `
 -Status ACTIVE `
 -LatestReports {'STATUS': {...},'SIGN_OFF': {...}} `
 -SourceIds ["0fbe863c063c4c88a35fd7f17e8a3df5"] `
 -SourcesWithOrphanEntitlements [{"type":"SOURCE","id":"30e6435e60bf47b0bc11622c31dfdbfd","name":"Active Directory"}]
```

- Convert the resource to JSON
```powershell
$CampaignGet | ConvertTo-JSON
```


[[Back to top]](#) 

