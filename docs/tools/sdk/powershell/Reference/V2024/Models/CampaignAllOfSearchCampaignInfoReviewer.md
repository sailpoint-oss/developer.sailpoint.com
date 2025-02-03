---
id: v2024-campaign-all-of-search-campaign-info-reviewer
title: CampaignAllOfSearchCampaignInfoReviewer
pagination_label: CampaignAllOfSearchCampaignInfoReviewer
sidebar_label: CampaignAllOfSearchCampaignInfoReviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfSearchCampaignInfoReviewer', 'V2024CampaignAllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/powershell/v2024/models/campaign-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSearchCampaignInfoReviewer', 'V2024CampaignAllOfSearchCampaignInfoReviewer']
---


# CampaignAllOfSearchCampaignInfoReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | The reviewer's DTO type. | [optional] 
**Id** | **String** | The reviewer's ID. | [optional] 
**Name** | **String** | The reviewer's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfSearchCampaignInfoReviewer = Initialize-PSSailpoint.V2024CampaignAllOfSearchCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$CampaignAllOfSearchCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

