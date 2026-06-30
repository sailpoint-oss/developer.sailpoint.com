---
id: campaignactivated-campaign-campaign-owner
title: CampaignactivatedCampaignCampaignOwner
pagination_label: CampaignactivatedCampaignCampaignOwner
sidebar_label: CampaignactivatedCampaignCampaignOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignactivatedCampaignCampaignOwner', 'CampaignactivatedCampaignCampaignOwner'] 
slug: /tools/sdk/powershell/triggers/models/campaignactivated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignactivatedCampaignCampaignOwner', 'CampaignactivatedCampaignCampaignOwner']
---


# CampaignactivatedCampaignCampaignOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity. | [required]
**DisplayName** | **String** | The human friendly name of the identity. | [required]
**Email** | **String** | The primary email address of the identity. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignactivatedCampaignCampaignOwner = Initialize-CampaignactivatedCampaignCampaignOwner  -Id 37f080867702c1910177031320c40n27 `
 -DisplayName John Snow `
 -Email john.snow@example.com
```

- Convert the resource to JSON
```powershell
$CampaignactivatedCampaignCampaignOwner | ConvertTo-JSON
```


[[Back to top]](#) 

