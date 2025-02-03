---
id: campaign-all-of-filter
title: CampaignAllOfFilter
pagination_label: CampaignAllOfFilter
sidebar_label: CampaignAllOfFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfFilter', 'CampaignAllOfFilter'] 
slug: /tools/sdk/powershell/v3/models/campaign-all-of-filter
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfFilter', 'CampaignAllOfFilter']
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
$CampaignAllOfFilter = Initialize-PSSailpoint.V3CampaignAllOfFilter  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Type CAMPAIGN_FILTER `
 -Name Test Filter
```

- Convert the resource to JSON
```powershell
$CampaignAllOfFilter | ConvertTo-JSON
```


[[Back to top]](#) 

