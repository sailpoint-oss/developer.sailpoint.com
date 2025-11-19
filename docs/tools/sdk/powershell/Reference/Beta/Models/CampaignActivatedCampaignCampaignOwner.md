---
id: beta-campaign-activated-campaign-campaign-owner
title: CampaignActivatedCampaignCampaignOwner
pagination_label: CampaignActivatedCampaignCampaignOwner
sidebar_label: CampaignActivatedCampaignCampaignOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignActivatedCampaignCampaignOwner', 'BetaCampaignActivatedCampaignCampaignOwner'] 
slug: /tools/sdk/powershell/beta/models/campaign-activated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignActivatedCampaignCampaignOwner', 'BetaCampaignActivatedCampaignCampaignOwner']
---


# CampaignActivatedCampaignCampaignOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity's unique ID. | [required]
**DisplayName** | **String** | Identity's name. | [required]
**Email** | **String** | Identity's primary email address. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignActivatedCampaignCampaignOwner = Initialize-BetaCampaignActivatedCampaignCampaignOwner  -Id 37f080867702c1910177031320c40n27 `
 -DisplayName Albert Albertson `
 -Email albert.albertson@example.com
```

- Convert the resource to JSON
```powershell
$CampaignActivatedCampaignCampaignOwner | ConvertTo-JSON
```


[[Back to top]](#) 

