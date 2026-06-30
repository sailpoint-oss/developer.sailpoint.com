---
id: list-saved-searches-v1401-response
title: ListSavedSearchesV1401Response
pagination_label: ListSavedSearchesV1401Response
sidebar_label: ListSavedSearchesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSavedSearchesV1401Response', 'ListSavedSearchesV1401Response'] 
slug: /tools/sdk/powershell/savedsearch/models/list-saved-searches-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListSavedSearchesV1401Response', 'ListSavedSearchesV1401Response']
---


# ListSavedSearchesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSavedSearchesV1401Response = Initialize-ListSavedSearchesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListSavedSearchesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

