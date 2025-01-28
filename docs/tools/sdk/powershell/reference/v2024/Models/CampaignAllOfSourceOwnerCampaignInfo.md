---
id: v2024-campaign-all-of-source-owner-campaign-info
title: CampaignAllOfSourceOwnerCampaignInfo
pagination_label: CampaignAllOfSourceOwnerCampaignInfo
sidebar_label: CampaignAllOfSourceOwnerCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfSourceOwnerCampaignInfo', 'V2024CampaignAllOfSourceOwnerCampaignInfo'] 
slug: /tools/sdk/powershell/v2024/models/campaign-all-of-source-owner-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSourceOwnerCampaignInfo', 'V2024CampaignAllOfSourceOwnerCampaignInfo']
---


# CampaignAllOfSourceOwnerCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** |  Pointer to **[]String** | The list of sources to be included in the campaign. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfSourceOwnerCampaignInfo = Initialize-PSSailpoint.V2024CampaignAllOfSourceOwnerCampaignInfo  -SourceIds [0fbe863c063c4c88a35fd7f17e8a3df5]
```

- Convert the resource to JSON
```powershell
$CampaignAllOfSourceOwnerCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

