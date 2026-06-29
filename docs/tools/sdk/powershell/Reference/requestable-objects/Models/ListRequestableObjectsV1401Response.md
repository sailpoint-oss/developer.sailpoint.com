---
id: list-requestable-objects-v1401-response
title: ListRequestableObjectsV1401Response
pagination_label: ListRequestableObjectsV1401Response
sidebar_label: ListRequestableObjectsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListRequestableObjectsV1401Response', 'ListRequestableObjectsV1401Response'] 
slug: /tools/sdk/powershell/requestableobjects/models/list-requestable-objects-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListRequestableObjectsV1401Response', 'ListRequestableObjectsV1401Response']
---


# ListRequestableObjectsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListRequestableObjectsV1401Response = Initialize-ListRequestableObjectsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListRequestableObjectsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

