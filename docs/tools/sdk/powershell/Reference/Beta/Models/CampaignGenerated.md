---
id: beta-campaign-generated
title: CampaignGenerated
pagination_label: CampaignGenerated
sidebar_label: CampaignGenerated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignGenerated', 'BetaCampaignGenerated'] 
slug: /tools/sdk/powershell/beta/models/campaign-generated
tags: ['SDK', 'Software Development Kit', 'CampaignGenerated', 'BetaCampaignGenerated']
---


# CampaignGenerated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Campaign** | [**CampaignGeneratedCampaign**](campaign-generated-campaign) |  | [required]

## Examples

- Prepare the resource
```powershell
$CampaignGenerated = Initialize-PSSailpoint.BetaCampaignGenerated  -Campaign null
```

- Convert the resource to JSON
```powershell
$CampaignGenerated | ConvertTo-JSON
```


[[Back to top]](#) 

