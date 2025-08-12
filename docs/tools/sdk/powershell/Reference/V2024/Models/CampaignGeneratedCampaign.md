---
id: v2024-campaign-generated-campaign
title: CampaignGeneratedCampaign
pagination_label: CampaignGeneratedCampaign
sidebar_label: CampaignGeneratedCampaign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignGeneratedCampaign', 'V2024CampaignGeneratedCampaign'] 
slug: /tools/sdk/powershell/v2024/models/campaign-generated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaign', 'V2024CampaignGeneratedCampaign']
---


# CampaignGeneratedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the campaign. | [required]
**Name** | **String** | Human friendly name of the campaign. | [required]
**Description** | **String** | Extended description of the campaign. | [required]
**Created** | **System.DateTime** | The date and time the campaign was created. | [required]
**Modified** | **String** | The date and time the campaign was last modified. | [optional] 
**Deadline** | **String** | The date and time when the campaign must be finished by. | [optional] 
**Type** |  **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | The type of campaign that was generated. | [required]
**CampaignOwner** | [**CampaignGeneratedCampaignCampaignOwner**](campaign-generated-campaign-campaign-owner) |  | [required]
**Status** |  **Enum** [  "STAGED",    "ACTIVATING",    "ACTIVE" ] | The current status of the campaign. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignGeneratedCampaign = Initialize-V2024CampaignGeneratedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
 -Name Manager Access Campaign `
 -Description Audit access for all employees. `
 -Created 2021-02-16T03:04:45.815Z `
 -Modified 2021-02-17T03:04:45.815Z `
 -Deadline 2021-02-18T03:04:45.815Z `
 -Type MANAGER `
 -CampaignOwner null `
 -Status STAGED
```

- Convert the resource to JSON
```powershell
$CampaignGeneratedCampaign | ConvertTo-JSON
```


[[Back to top]](#) 

