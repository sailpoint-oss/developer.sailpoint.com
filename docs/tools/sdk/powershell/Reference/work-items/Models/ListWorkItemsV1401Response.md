---
id: list-work-items-v1401-response
title: ListWorkItemsV1401Response
pagination_label: ListWorkItemsV1401Response
sidebar_label: ListWorkItemsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListWorkItemsV1401Response', 'ListWorkItemsV1401Response'] 
slug: /tools/sdk/powershell/workitems/models/list-work-items-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListWorkItemsV1401Response', 'ListWorkItemsV1401Response']
---


# ListWorkItemsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkItemsV1401Response = Initialize-ListWorkItemsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListWorkItemsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

