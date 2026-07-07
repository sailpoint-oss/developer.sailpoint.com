---
id: list-work-items-v1429-response
title: ListWorkItemsV1429Response
pagination_label: ListWorkItemsV1429Response
sidebar_label: ListWorkItemsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListWorkItemsV1429Response', 'ListWorkItemsV1429Response'] 
slug: /tools/sdk/powershell/workitems/models/list-work-items-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListWorkItemsV1429Response', 'ListWorkItemsV1429Response']
---


# ListWorkItemsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkItemsV1429Response = Initialize-ListWorkItemsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListWorkItemsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

