---
id: v2024-campaign-all-of-role-composition-campaign-info-reviewer
title: CampaignAllOfRoleCompositionCampaignInfoReviewer
pagination_label: CampaignAllOfRoleCompositionCampaignInfoReviewer
sidebar_label: CampaignAllOfRoleCompositionCampaignInfoReviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfoReviewer', 'V2024CampaignAllOfRoleCompositionCampaignInfoReviewer'] 
slug: /tools/sdk/powershell/v2024/models/campaign-all-of-role-composition-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfoReviewer', 'V2024CampaignAllOfRoleCompositionCampaignInfoReviewer']
---


# CampaignAllOfRoleCompositionCampaignInfoReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | The reviewer's DTO type. | [optional] 
**Id** | **String** | The reviewer's ID. | [optional] 
**Name** | **String** | The reviewer's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfRoleCompositionCampaignInfoReviewer = Initialize-PSSailpoint.V2024CampaignAllOfRoleCompositionCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$CampaignAllOfRoleCompositionCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

