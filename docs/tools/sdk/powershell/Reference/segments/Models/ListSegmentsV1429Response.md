---
id: list-segments-v1429-response
title: ListSegmentsV1429Response
pagination_label: ListSegmentsV1429Response
sidebar_label: ListSegmentsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSegmentsV1429Response', 'ListSegmentsV1429Response'] 
slug: /tools/sdk/powershell/segments/models/list-segments-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSegmentsV1429Response', 'ListSegmentsV1429Response']
---


# ListSegmentsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSegmentsV1429Response = Initialize-ListSegmentsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListSegmentsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

