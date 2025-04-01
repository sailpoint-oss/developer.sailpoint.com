---
id: v2025-campaign-activated
title: CampaignActivated
pagination_label: CampaignActivated
sidebar_label: CampaignActivated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignActivated', 'V2025CampaignActivated'] 
slug: /tools/sdk/powershell/v2025/models/campaign-activated
tags: ['SDK', 'Software Development Kit', 'CampaignActivated', 'V2025CampaignActivated']
---


# CampaignActivated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Campaign** | [**CampaignActivatedCampaign**](campaign-activated-campaign) |  | [required]

## Examples

- Prepare the resource
```powershell
$CampaignActivated = Initialize-PSSailpoint.V2025CampaignActivated  -Campaign null
```

- Convert the resource to JSON
```powershell
$CampaignActivated | ConvertTo-JSON
```


[[Back to top]](#) 

