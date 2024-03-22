---
id: campaign-generated-campaign
title: CampaignGeneratedCampaign
pagination_label: CampaignGeneratedCampaign
sidebar_label: CampaignGeneratedCampaign
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignGeneratedCampaign'] 
slug: /tools/sdk/powershell/beta/models/campaign-generated-campaign
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaign']
---


# CampaignGeneratedCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the campaign. | 
**Name** |  **String** | Human friendly name of the campaign. | 
**Description** |  **String** | Extended description of the campaign. | 
**Created** |  **System.DateTime** | The date and time the campaign was created. | 
**Modified** |  Pointer to **String** | The date and time the campaign was last modified. | [optional] 
**Deadline** |  Pointer to **String** | The date and time when the campaign must be finished by. | [optional] 
**Type** |   **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | The type of campaign that was generated. | 
**CampaignOwner** |  [**CampaignGeneratedCampaignCampaignOwner**](campaign-generated-campaign-campaign-owner) |  | 
**Status** |   **Enum** [  "STAGED",    "ACTIVATING",    "ACTIVE" ] | The current status of the campaign. | 

## Examples

- Prepare the resource
```powershell
$CampaignGeneratedCampaign = Initialize-PSSailpointBetaCampaignGeneratedCampaign  -Id 2c91808576f886190176f88cac5a0010 `
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

