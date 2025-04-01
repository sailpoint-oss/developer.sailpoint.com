---
id: v2025-list-predefined-select-options-response
title: ListPredefinedSelectOptionsResponse
pagination_label: ListPredefinedSelectOptionsResponse
sidebar_label: ListPredefinedSelectOptionsResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListPredefinedSelectOptionsResponse', 'V2025ListPredefinedSelectOptionsResponse'] 
slug: /tools/sdk/powershell/v2025/models/list-predefined-select-options-response
tags: ['SDK', 'Software Development Kit', 'ListPredefinedSelectOptionsResponse', 'V2025ListPredefinedSelectOptionsResponse']
---


# ListPredefinedSelectOptionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | **[]String** | Results holds a list of PreDefinedSelectOption items | [optional] 

## Examples

- Prepare the resource
```powershell
$ListPredefinedSelectOptionsResponse = Initialize-PSSailpoint.V2025ListPredefinedSelectOptionsResponse  -Results null
```

- Convert the resource to JSON
```powershell
$ListPredefinedSelectOptionsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

