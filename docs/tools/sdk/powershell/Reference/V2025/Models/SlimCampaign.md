---
id: v2025-slim-campaign
title: SlimCampaign
pagination_label: SlimCampaign
sidebar_label: SlimCampaign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SlimCampaign', 'V2025SlimCampaign'] 
slug: /tools/sdk/powershell/v2025/models/slim-campaign
tags: ['SDK', 'Software Development Kit', 'SlimCampaign', 'V2025SlimCampaign']
---


# SlimCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the campaign | [optional] [readonly] 
**Name** | **String** | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [required]
**Description** | **String** | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details.  | [required]
**Deadline** | **System.DateTime** | The campaign's completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** |  **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION",    "MACHINE_ACCOUNT" ] | The type of campaign. Could be extended in the future. | [required]
**EmailNotificationEnabled** | **Boolean** | Enables email notification for this campaign | [optional] [default to $false]
**AutoRevokeAllowed** | **Boolean** | Allows auto revoke for this campaign | [optional] [default to $false]
**RecommendationsEnabled** | **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to $false]
**Status** |  **Enum** [  "PENDING",    "STAGED",    "CANCELING",    "ACTIVATING",    "ACTIVE",    "COMPLETING",    "COMPLETED",    "ERROR",    "ARCHIVED" ] | The campaign's current status. | [optional] [readonly] 
**CorrelatedStatus** |  **Enum** [  "CORRELATED",    "UNCORRELATED" ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** | **System.DateTime** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** | **Int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** | **Int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** | [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$SlimCampaign = Initialize-V2025SlimCampaign  -Id 2c9079b270a266a60170a2779fcb0007 `
 -Name Manager Campaign `
 -Description Everyone needs to be reviewed by their manager `
 -Deadline 2020-03-15T10:00:01.456Z `
 -Type MANAGER `
 -EmailNotificationEnabled false `
 -AutoRevokeAllowed false `
 -RecommendationsEnabled true `
 -Status ACTIVE `
 -CorrelatedStatus CORRELATED `
 -Created 2020-03-03T22:15:13.611Z `
 -TotalCertifications 100 `
 -CompletedCertifications 10 `
 -Alerts null
```

- Convert the resource to JSON
```powershell
$SlimCampaign | ConvertTo-JSON
```


[[Back to top]](#) 

