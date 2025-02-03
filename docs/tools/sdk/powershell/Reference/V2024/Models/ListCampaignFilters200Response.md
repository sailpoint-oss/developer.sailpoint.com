---
id: v2024-list-campaign-filters200-response
title: ListCampaignFilters200Response
pagination_label: ListCampaignFilters200Response
sidebar_label: ListCampaignFilters200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListCampaignFilters200Response', 'V2024ListCampaignFilters200Response'] 
slug: /tools/sdk/powershell/v2024/models/list-campaign-filters200-response
tags: ['SDK', 'Software Development Kit', 'ListCampaignFilters200Response', 'V2024ListCampaignFilters200Response']
---


# ListCampaignFilters200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]CampaignFilterDetails**](campaign-filter-details) | List of campaign filters. | [optional] 
**Count** | **Int32** | Number of filters returned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCampaignFilters200Response = Initialize-PSSailpoint.V2024ListCampaignFilters200Response  -Items null `
 -Count 2
```

- Convert the resource to JSON
```powershell
$ListCampaignFilters200Response | ConvertTo-JSON
```


[[Back to top]](#) 

