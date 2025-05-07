---
id: v2024-campaign-template-owner-ref
title: CampaignTemplateOwnerRef
pagination_label: CampaignTemplateOwnerRef
sidebar_label: CampaignTemplateOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignTemplateOwnerRef', 'V2024CampaignTemplateOwnerRef'] 
slug: /tools/sdk/powershell/v2024/models/campaign-template-owner-ref
tags: ['SDK', 'Software Development Kit', 'CampaignTemplateOwnerRef', 'V2024CampaignTemplateOwnerRef']
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
$CampaignTemplateOwnerRef = Initialize-V2024CampaignTemplateOwnerRef  -Id 2c918086676d3e0601677611dbde220f `
 -Type IDENTITY `
 -Name Mister Manager `
 -Email mr.manager@example.com
```

- Convert the resource to JSON
```powershell
$CampaignTemplateOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

