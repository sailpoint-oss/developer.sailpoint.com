# CampaignSummary

# CampaignSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the campaign | [optional] [readonly] 
**Name** | **String** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**Description** | **String** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [required]
**Deadline** | **System.DateTime** | The campaign's completion deadline date. | [optional] 
**DeadlineTimezone** | **String** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as 'Z') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] 
**DeadlineTime** | **System.DateTime** | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [optional] 
**EmailNotificationEnabled** | **Boolean** | Enables email notification for this campaign | [optional] [default to $false]
**AutoRevokeAllowed** | **Boolean** | Allows auto revoke for this campaign | [optional] [default to $false]
**RecommendationsEnabled** | **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to $false]
**SunsetCommentsRequired** | **Boolean** | Determines if comments on sunset date changes are required. | [optional] [default to $true]
**MandatoryCommentRequirement** | **CampaignMandatoryCommentRequirement** |  | [optional] 
**Type** | **CampaignType** |  | [required]
**Reviewer** | [**Reviewer**](reviewer) |  | [optional] 
**Alerts** | [**[]Alert**](alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**Created** | **System.DateTime** | Created time of the campaign | [optional] [readonly] 
**Modified** | **System.DateTime** | Modified time of the campaign | [optional] [readonly] 
**TotalCertifications** | **Int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | **Int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Status** |  **Enum** [  "ACTIVE",    "ACTIVATING",    "CANCELING",    "COMPLETED",    "COMPLETING",    "ERROR",    "PENDING",    "STAGED" ] | The campaign's current status. | [optional] [readonly] 
**GenerationType** | **CampaignGenerationType** |  | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignSummary = Initialize-CampaignSummary  -Id 2c9079b2-70a2-66a6-a170-a2779fcb0007 `
 -Name Manager Campaign `
 -Description Everyone needs to be reviewed by their manager `
 -Deadline Sun Mar 15 00:00:00 UTC 2020 `
 -DeadlineTimezone -05:00 `
 -DeadlineTime 2018-10-19T13:49:37.385Z `
 -EmailNotificationEnabled false `
 -AutoRevokeAllowed false `
 -RecommendationsEnabled true `
 -SunsetCommentsRequired true `
 -MandatoryCommentRequirement null `
 -Type null `
 -Reviewer null `
 -Alerts null `
 -Created 2020-03-03T22:15:13.611Z `
 -Modified 2020-03-03T22:20:12.674Z `
 -TotalCertifications 100 `
 -CompletedCertifications 10 `
 -Status ACTIVE `
 -GenerationType null
```

- Convert the resource to JSON
```powershell
$CampaignSummary | ConvertTo-JSON
```


[[Back to top]](#) 

