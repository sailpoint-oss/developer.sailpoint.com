---
id: search-post-v1401-response
title: SearchPostV1401Response
pagination_label: SearchPostV1401Response
sidebar_label: SearchPostV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchPostV1401Response', 'SearchPostV1401Response'] 
slug: /tools/sdk/powershell/search/models/search-post-v1401-response
tags: ['SDK', 'Software Development Kit', 'SearchPostV1401Response', 'SearchPostV1401Response']
---


# SearchPostV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchPostV1401Response = Initialize-SearchPostV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$SearchPostV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

