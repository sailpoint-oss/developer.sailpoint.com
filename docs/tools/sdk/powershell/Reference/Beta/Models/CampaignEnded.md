---
id: beta-campaign-ended
title: CampaignEnded
pagination_label: CampaignEnded
sidebar_label: CampaignEnded
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignEnded', 'BetaCampaignEnded'] 
slug: /tools/sdk/powershell/beta/models/campaign-ended
tags: ['SDK', 'Software Development Kit', 'CampaignEnded', 'BetaCampaignEnded']
---


# CampaignEnded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Campaign** | [**CampaignEndedCampaign**](campaign-ended-campaign) |  | [required]

## Examples

- Prepare the resource
```powershell
$CampaignEnded = Initialize-BetaCampaignEnded  -Campaign null
```

- Convert the resource to JSON
```powershell
$CampaignEnded | ConvertTo-JSON
```


[[Back to top]](#) 

