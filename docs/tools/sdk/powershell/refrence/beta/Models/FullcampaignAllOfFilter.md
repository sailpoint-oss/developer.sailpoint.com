---
id: fullcampaign-all-of-filter
title: FullcampaignAllOfFilter
pagination_label: FullcampaignAllOfFilter
sidebar_label: FullcampaignAllOfFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FullcampaignAllOfFilter'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-filter
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfFilter']
---


# FullcampaignAllOfFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of whatever type of filter is being used. | [optional] 
**Type** |  Pointer to  **Enum** [  "CAMPAIGN_FILTER",    "RULE" ] | Type of the filter | [optional] 
**Name** |  Pointer to **String** | Name of the filter | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfFilter = Initialize-PSSailpoint.BetaFullcampaignAllOfFilter  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Type CAMPAIGN_FILTER `
 -Name Test Filter
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfFilter | ConvertTo-JSON
```


[[Back to top]](#) 

