---
id: list-campaign-filters-v1429-response
title: ListCampaignFiltersV1429Response
pagination_label: ListCampaignFiltersV1429Response
sidebar_label: ListCampaignFiltersV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListCampaignFiltersV1429Response', 'ListCampaignFiltersV1429Response'] 
slug: /tools/sdk/powershell/certificationcampaignfilters/models/list-campaign-filters-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListCampaignFiltersV1429Response', 'ListCampaignFiltersV1429Response']
---


# ListCampaignFiltersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCampaignFiltersV1429Response = Initialize-ListCampaignFiltersV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListCampaignFiltersV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

