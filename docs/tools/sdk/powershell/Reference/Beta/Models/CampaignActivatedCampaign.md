---
id: beta-campaign-activated-campaign
title: CampaignActivatedCampaign
pagination_label: CampaignActivatedCampaign
sidebar_label: CampaignActivatedCampaign
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignActivatedCampaign', 'BetaCampaignActivatedCampaign'] 
slug: /tools/sdk/powershell/beta/models/campaign-activated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaign', 'BetaCampaignActivatedCampaign']
---


# CampaignActivatedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Campaign's unique ID. | [required]
**Name** | **String** | Campaign's name. | [required]
**Description** | **String** | Campaign's extended description. | [required]
**Created** | **System.DateTime** | Date and time when the campaign was created. | [required]
**Modified** | **System.DateTime** | Date and time when the campaign was last modified. | [optional] 
**Deadline** | **System.DateTime** | Date and time when the campaign is due. | [required]
**Type** |  **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | Campaign's type. | [required]
**CampaignOwner** | [**CampaignActivatedCampaignCampaignOwner**](campaign-activated-campaign-campaign-owner) |  | [required]
**Status** |  **Enum** [  "ACTIVE" ] | Campaign's current status. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignActivatedCampaign = Initialize-PSSailpoint.BetaCampaignActivatedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
 -Name Manager Access Campaign `
 -Description Audit access for all employees. `
 -Created 2021-02-16T03:04:45.815Z `
 -Modified 2021-02-16T03:06:45.815Z `
 -Deadline 2021-03-16T03:04:45.815Z `
 -Type MANAGER `
 -CampaignOwner null `
 -Status ACTIVE
```

- Convert the resource to JSON
```powershell
$CampaignActivatedCampaign | ConvertTo-JSON
```


[[Back to top]](#) 

