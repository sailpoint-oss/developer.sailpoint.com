---
id: list-sources-v1401-response
title: ListSourcesV1401Response
pagination_label: ListSourcesV1401Response
sidebar_label: ListSourcesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSourcesV1401Response', 'ListSourcesV1401Response'] 
slug: /tools/sdk/powershell/sources/models/list-sources-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListSourcesV1401Response', 'ListSourcesV1401Response']
---


# ListSourcesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSourcesV1401Response = Initialize-ListSourcesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListSourcesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

