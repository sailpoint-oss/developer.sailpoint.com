---
id: campaign-template-owner-ref
title: CampaignTemplateOwnerRef
pagination_label: CampaignTemplateOwnerRef
sidebar_label: CampaignTemplateOwnerRef
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignTemplateOwnerRef'] 
slug: /tools/sdk/powershell/beta/models/campaign-template-owner-ref
tags: ['SDK', 'Software Development Kit', 'CampaignTemplateOwnerRef']
---


# CampaignTemplateOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the owner | [optional] 
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Type of the owner | [optional] 
**Name** |  Pointer to **String** | Name of the owner | [optional] 
**Email** |  Pointer to **String** | Email of the owner | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignTemplateOwnerRef = Initialize-PSSailpointBetaCampaignTemplateOwnerRef  -Id 2c918086676d3e0601677611dbde220f `
 -Type IDENTITY `
 -Name Mister Manager `
 -Email mr.manager@example.com
```

- Convert the resource to JSON
```powershell
$CampaignTemplateOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

