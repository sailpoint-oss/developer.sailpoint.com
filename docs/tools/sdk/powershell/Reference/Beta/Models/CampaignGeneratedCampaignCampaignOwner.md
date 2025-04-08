---
id: beta-campaign-generated-campaign-campaign-owner
title: CampaignGeneratedCampaignCampaignOwner
pagination_label: CampaignGeneratedCampaignCampaignOwner
sidebar_label: CampaignGeneratedCampaignCampaignOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignGeneratedCampaignCampaignOwner', 'BetaCampaignGeneratedCampaignCampaignOwner'] 
slug: /tools/sdk/powershell/beta/models/campaign-generated-campaign-campaign-owner
tags: ['SDK', 'Software Development Kit', 'CampaignGeneratedCampaignCampaignOwner', 'BetaCampaignGeneratedCampaignCampaignOwner']
---


# CampaignGeneratedCampaignCampaignOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity's unique ID. | [required]
**DisplayName** | **String** | Identity's name. | [required]
**Email** | **String** | Identity's primary email address. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignGeneratedCampaignCampaignOwner = Initialize-PSSailpoint.BetaCampaignGeneratedCampaignCampaignOwner  -Id 37f080867702c1910177031320c40n27 `
 -DisplayName Albert Albertson `
 -Email albert.albertson@example.com
```

- Convert the resource to JSON
```powershell
$CampaignGeneratedCampaignCampaignOwner | ConvertTo-JSON
```


[[Back to top]](#) 

