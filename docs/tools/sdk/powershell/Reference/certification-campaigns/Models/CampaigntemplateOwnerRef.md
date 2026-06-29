---
id: campaigntemplate-owner-ref
title: CampaigntemplateOwnerRef
pagination_label: CampaigntemplateOwnerRef
sidebar_label: CampaigntemplateOwnerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaigntemplateOwnerRef', 'CampaigntemplateOwnerRef'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaigntemplate-owner-ref
tags: ['SDK', 'Software Development Kit', 'CampaigntemplateOwnerRef', 'CampaigntemplateOwnerRef']
---


# CampaigntemplateOwnerRef

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
$CampaigntemplateOwnerRef = Initialize-CampaigntemplateOwnerRef  -Id 2c918086676d3e0601677611dbde220f `
 -Type IDENTITY `
 -Name Mister Manager `
 -Email mr.manager@example.com
```

- Convert the resource to JSON
```powershell
$CampaigntemplateOwnerRef | ConvertTo-JSON
```


[[Back to top]](#) 

