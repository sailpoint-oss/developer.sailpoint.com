---
id: search-post-v1429-response
title: SearchPostV1429Response
pagination_label: SearchPostV1429Response
sidebar_label: SearchPostV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchPostV1429Response', 'SearchPostV1429Response'] 
slug: /tools/sdk/powershell/search/models/search-post-v1429-response
tags: ['SDK', 'Software Development Kit', 'SearchPostV1429Response', 'SearchPostV1429Response']
---


# SearchPostV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchPostV1429Response = Initialize-SearchPostV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$SearchPostV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

