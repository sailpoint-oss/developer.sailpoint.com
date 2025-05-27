---
id: v2025-campaign-activated-campaign-campaign-owner
title: CampaignActivatedCampaignCampaignOwner
pagination_label: CampaignActivatedCampaignCampaignOwner
sidebar_label: CampaignActivatedCampaignCampaignOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignActivatedCampaignCampaignOwner', 'V2025CampaignActivatedCampaignCampaignOwner'] 
slug: /tools/sdk/powershell/v2025/models/campaign-activated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaignCampaignOwner', 'V2025CampaignActivatedCampaignCampaignOwner']
---


# CampaignActivatedCampaignCampaignOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity. | [required]
**DisplayName** | **String** | The human friendly name of the identity. | [required]
**Email** | **String** | The primary email address of the identity. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignActivatedCampaignCampaignOwner = Initialize-V2025CampaignActivatedCampaignCampaignOwner  -Id 37f080867702c1910177031320c40n27 `
 -DisplayName John Snow `
 -Email john.snow@example.com
```

- Convert the resource to JSON
```powershell
$CampaignActivatedCampaignCampaignOwner | ConvertTo-JSON
```


[[Back to top]](#) 

