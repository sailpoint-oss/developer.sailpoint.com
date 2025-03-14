---
id: beta-campaign-generated-campaign
title: CampaignGeneratedCampaign
pagination_label: CampaignGeneratedCampaign
sidebar_label: CampaignGeneratedCampaign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignGeneratedCampaign', 'BetaCampaignGeneratedCampaign'] 
slug: /tools/sdk/powershell/beta/models/campaign-generated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaign', 'BetaCampaignGeneratedCampaign']
---


# CampaignGeneratedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Campaign's unique ID. | [required]
**Name** | **String** | Campaign's name. | [required]
**Description** | **String** | Campaign's extended description. | [required]
**Created** | **System.DateTime** | Date and time when the campaign was created. | [required]
**Modified** | **String** | Date and time when the campaign was last modified. | [optional] 
**Deadline** | **String** | Date and time when the campaign must be finished. | [optional] 
**Type** |  **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | Campaign's type. | [required]
**CampaignOwner** | [**CampaignGeneratedCampaignCampaignOwner**](campaign-generated-campaign-campaign-owner) |  | [required]
**Status** |  **Enum** [  "STAGED",    "ACTIVATING",    "ACTIVE" ] | Campaign's current status. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignGeneratedCampaign = Initialize-PSSailpoint.BetaCampaignGeneratedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
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

