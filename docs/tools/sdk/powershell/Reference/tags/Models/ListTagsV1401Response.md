---
id: list-tags-v1401-response
title: ListTagsV1401Response
pagination_label: ListTagsV1401Response
sidebar_label: ListTagsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTagsV1401Response', 'ListTagsV1401Response'] 
slug: /tools/sdk/powershell/tags/models/list-tags-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListTagsV1401Response', 'ListTagsV1401Response']
---


# ListTagsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTagsV1401Response = Initialize-ListTagsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTagsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

