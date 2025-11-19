---
id: beta-campaign-ended-campaign
title: CampaignEndedCampaign
pagination_label: CampaignEndedCampaign
sidebar_label: CampaignEndedCampaign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignEndedCampaign', 'BetaCampaignEndedCampaign'] 
slug: /tools/sdk/powershell/beta/models/campaign-ended-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignEndedCampaign', 'BetaCampaignEndedCampaign']
---


# CampaignEndedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Campaign's unique ID for the campaign. | [required]
**Name** | **String** | Campaign's unique ID. | [required]
**Description** | **String** | Campaign's extended description. | [required]
**Created** | **System.DateTime** | Date and time when the campaign was created. | [required]
**Modified** | **System.DateTime** | Date and time when the campaign was last modified. | [optional] 
**Deadline** | **System.DateTime** | Date and time when the campaign is due. | [required]
**Type** |  **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | Campaign's type. | [required]
**CampaignOwner** | [**CampaignActivatedCampaignCampaignOwner**](campaign-activated-campaign-campaign-owner) |  | [required]
**Status** |  **Enum** [  "COMPLETED" ] | Campaign's current status. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignEndedCampaign = Initialize-BetaCampaignEndedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
 -Name Manager Access Campaign `
 -Description Audit access for all employees. `
 -Created 2021-02-16T03:04:45.815Z `
 -Modified 2021-03-16T03:06:45.815Z `
 -Deadline 2021-03-16T03:04:45.815Z `
 -Type MANAGER `
 -CampaignOwner null `
 -Status COMPLETED
```

- Convert the resource to JSON
```powershell
$CampaignEndedCampaign | ConvertTo-JSON
```


[[Back to top]](#) 

