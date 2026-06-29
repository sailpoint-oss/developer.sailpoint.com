---
id: list-saved-searches-v1429-response
title: ListSavedSearchesV1429Response
pagination_label: ListSavedSearchesV1429Response
sidebar_label: ListSavedSearchesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSavedSearchesV1429Response', 'ListSavedSearchesV1429Response'] 
slug: /tools/sdk/powershell/savedsearch/models/list-saved-searches-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSavedSearchesV1429Response', 'ListSavedSearchesV1429Response']
---


# ListSavedSearchesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSavedSearchesV1429Response = Initialize-ListSavedSearchesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListSavedSearchesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

