---
id: beta-campaign-template-owner-ref
title: CampaignTemplateOwnerRef
pagination_label: CampaignTemplateOwnerRef
sidebar_label: CampaignTemplateOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignTemplateOwnerRef', 'BetaCampaignTemplateOwnerRef'] 
slug: /tools/sdk/powershell/beta/models/campaign-template-owner-ref
tags: ['SDK', 'Software Development Kit', 'CampaignTemplateOwnerRef', 'BetaCampaignTemplateOwnerRef']
---


# CampaignTemplateOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the owner | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Type of the owner | [optional] 
**Name** | **String** | Name of the owner | [optional] 
**Email** | **String** | Email of the owner | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignTemplateOwnerRef = Initialize-BetaCampaignTemplateOwnerRef  -Id 2c918086676d3e0601677611dbde220f `
 -Type IDENTITY `
 -Name Mister Manager `
 -Email mr.manager@example.com
```

- Convert the resource to JSON
```powershell
$CampaignTemplateOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

