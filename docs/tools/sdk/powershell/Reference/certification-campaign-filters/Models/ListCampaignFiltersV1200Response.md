---
id: list-campaign-filters-v1200-response
title: ListCampaignFiltersV1200Response
pagination_label: ListCampaignFiltersV1200Response
sidebar_label: ListCampaignFiltersV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListCampaignFiltersV1200Response', 'ListCampaignFiltersV1200Response'] 
slug: /tools/sdk/powershell/certificationcampaignfilters/models/list-campaign-filters-v1200-response
tags: ['SDK', 'Software Development Kit', 'ListCampaignFiltersV1200Response', 'ListCampaignFiltersV1200Response']
---


# ListCampaignFiltersV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Campaignfilterdetails**](campaignfilterdetails) | List of campaign filters. | [optional] 
**Count** | **Int32** | Number of filters returned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCampaignFiltersV1200Response = Initialize-ListCampaignFiltersV1200Response  -Items null `
 -Count 2
```

- Convert the resource to JSON
```powershell
$ListCampaignFiltersV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

