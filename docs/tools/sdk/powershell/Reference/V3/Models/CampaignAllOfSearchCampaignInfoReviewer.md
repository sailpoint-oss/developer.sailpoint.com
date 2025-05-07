---
id: campaign-all-of-search-campaign-info-reviewer
title: CampaignAllOfSearchCampaignInfoReviewer
pagination_label: CampaignAllOfSearchCampaignInfoReviewer
sidebar_label: CampaignAllOfSearchCampaignInfoReviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfSearchCampaignInfoReviewer', 'CampaignAllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/powershell/v3/models/campaign-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSearchCampaignInfoReviewer', 'CampaignAllOfSearchCampaignInfoReviewer']
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
$CampaignAllOfSearchCampaignInfoReviewer = Initialize-CampaignAllOfSearchCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$CampaignAllOfSearchCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

