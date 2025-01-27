---
id: beta-campaign-activated
title: CampaignActivated
pagination_label: CampaignActivated
sidebar_label: CampaignActivated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignActivated'] 
slug: /tools/sdk/powershell/beta/models/campaign-activated
tags: ['SDK', 'Software Development Kit', 'CampaignActivated']
---


# CampaignActivated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Campaign** |  [**CampaignActivatedCampaign**](campaign-activated-campaign) |  | [required]

## Examples

- Prepare the resource
```powershell
$CampaignActivated = Initialize-PSSailpoint.BetaCampaignActivated  -Campaign null
```

- Convert the resource to JSON
```powershell
$CampaignActivated | ConvertTo-JSON
```


[[Back to top]](#) 

