---
id: campaignended-campaign
title: CampaignendedCampaign
pagination_label: CampaignendedCampaign
sidebar_label: CampaignendedCampaign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignendedCampaign', 'CampaignendedCampaign'] 
slug: /tools/sdk/powershell/triggers/models/campaignended-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignendedCampaign', 'CampaignendedCampaign']
---


# CampaignendedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique ID for the campaign. | [required]
**Name** | **String** | The human friendly name of the campaign. | [required]
**Description** | **String** | Extended description of the campaign. | [required]
**Created** | **System.DateTime** | The date and time the campaign was created. | [required]
**Modified** | **System.DateTime** | The date and time the campaign was last modified. | [optional] 
**Deadline** | **System.DateTime** | The date and time the campaign is due. | [required]
**Type** |  **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | The type of campaign. | [required]
**CampaignOwner** | [**CampaignactivatedCampaignCampaignOwner**](campaignactivated-campaign-campaign-owner) |  | [required]
**Status** |  **Enum** [  "COMPLETED" ] | The current status of the campaign. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignendedCampaign = Initialize-CampaignendedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
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
$CampaignendedCampaign | ConvertTo-JSON
```


[[Back to top]](#) 

