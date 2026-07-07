---
id: list-dimensions-v1429-response
title: ListDimensionsV1429Response
pagination_label: ListDimensionsV1429Response
sidebar_label: ListDimensionsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListDimensionsV1429Response', 'ListDimensionsV1429Response'] 
slug: /tools/sdk/powershell/dimensions/models/list-dimensions-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListDimensionsV1429Response', 'ListDimensionsV1429Response']
---


# ListDimensionsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListDimensionsV1429Response = Initialize-ListDimensionsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListDimensionsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

