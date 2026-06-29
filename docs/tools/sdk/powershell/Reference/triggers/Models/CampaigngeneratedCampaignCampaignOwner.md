---
id: campaigngenerated-campaign-campaign-owner
title: CampaigngeneratedCampaignCampaignOwner
pagination_label: CampaigngeneratedCampaignCampaignOwner
sidebar_label: CampaigngeneratedCampaignCampaignOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaigngeneratedCampaignCampaignOwner', 'CampaigngeneratedCampaignCampaignOwner'] 
slug: /tools/sdk/powershell/triggers/models/campaigngenerated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaigngeneratedCampaignCampaignOwner', 'CampaigngeneratedCampaignCampaignOwner']
---


# CampaigngeneratedCampaignCampaignOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity. | [required]
**DisplayName** | **String** | The display name of the identity. | [required]
**Email** | **String** | The primary email address of the identity. | [required]

## Examples

- Prepare the resource
```powershell
$CampaigngeneratedCampaignCampaignOwner = Initialize-CampaigngeneratedCampaignCampaignOwner  -Id 37f080867702c1910177031320c40n27 `
 -DisplayName John Snow `
 -Email john.snow@example.com
```

- Convert the resource to JSON
```powershell
$CampaigngeneratedCampaignCampaignOwner | ConvertTo-JSON
```


[[Back to top]](#) 

