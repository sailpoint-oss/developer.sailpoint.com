---
id: v2025-campaign-all-of-filter
title: CampaignAllOfFilter
pagination_label: CampaignAllOfFilter
sidebar_label: CampaignAllOfFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfFilter', 'V2025CampaignAllOfFilter'] 
slug: /tools/sdk/powershell/v2025/models/campaign-all-of-filter
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfFilter', 'V2025CampaignAllOfFilter']
---


# CampaignAllOfFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of whatever type of filter is being used. | [optional] 
**Type** |  **Enum** [  "CAMPAIGN_FILTER",    "RULE" ] | Type of the filter | [optional] 
**Name** | **String** | Name of the filter | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfFilter = Initialize-V2025CampaignAllOfFilter  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Type CAMPAIGN_FILTER `
 -Name Test Filter
```

- Convert the resource to JSON
```powershell
$CampaignAllOfFilter | ConvertTo-JSON
```


[[Back to top]](#) 

