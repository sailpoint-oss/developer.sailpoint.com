---
id: campaign2-all-of-source-owner-campaign-info
title: Campaign2AllOfSourceOwnerCampaignInfo
pagination_label: Campaign2AllOfSourceOwnerCampaignInfo
sidebar_label: Campaign2AllOfSourceOwnerCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaign2AllOfSourceOwnerCampaignInfo', 'Campaign2AllOfSourceOwnerCampaignInfo'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaign2-all-of-source-owner-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSourceOwnerCampaignInfo', 'Campaign2AllOfSourceOwnerCampaignInfo']
---


# Campaign2AllOfSourceOwnerCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** | **[]String** | The list of sources to be included in the campaign. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfSourceOwnerCampaignInfo = Initialize-Campaign2AllOfSourceOwnerCampaignInfo  -SourceIds ["0fbe863c063c4c88a35fd7f17e8a3df5"]
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfSourceOwnerCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

