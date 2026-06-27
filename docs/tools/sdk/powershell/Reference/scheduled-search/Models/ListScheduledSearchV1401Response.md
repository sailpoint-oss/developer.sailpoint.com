---
id: list-scheduled-search-v1401-response
title: ListScheduledSearchV1401Response
pagination_label: ListScheduledSearchV1401Response
sidebar_label: ListScheduledSearchV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListScheduledSearchV1401Response', 'ListScheduledSearchV1401Response'] 
slug: /tools/sdk/powershell/scheduledsearch/models/list-scheduled-search-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListScheduledSearchV1401Response', 'ListScheduledSearchV1401Response']
---


# ListScheduledSearchV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListScheduledSearchV1401Response = Initialize-ListScheduledSearchV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListScheduledSearchV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

