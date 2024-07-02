---
id: fullcampaign-all-of-source-owner-campaign-info
title: FullcampaignAllOfSourceOwnerCampaignInfo
pagination_label: FullcampaignAllOfSourceOwnerCampaignInfo
sidebar_label: FullcampaignAllOfSourceOwnerCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FullcampaignAllOfSourceOwnerCampaignInfo'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-source-owner-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSourceOwnerCampaignInfo']
---


# FullcampaignAllOfSourceOwnerCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** |  Pointer to **[]String** | The list of sources to be included in the campaign. | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfSourceOwnerCampaignInfo = Initialize-BetaFullcampaignAllOfSourceOwnerCampaignInfo  -SourceIds [0fbe863c063c4c88a35fd7f17e8a3df5]
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfSourceOwnerCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

