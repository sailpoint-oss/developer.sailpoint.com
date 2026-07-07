---
id: list-transforms-v1401-response
title: ListTransformsV1401Response
pagination_label: ListTransformsV1401Response
sidebar_label: ListTransformsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTransformsV1401Response', 'ListTransformsV1401Response'] 
slug: /tools/sdk/powershell/transforms/models/list-transforms-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListTransformsV1401Response', 'ListTransformsV1401Response']
---


# ListTransformsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTransformsV1401Response = Initialize-ListTransformsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTransformsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

