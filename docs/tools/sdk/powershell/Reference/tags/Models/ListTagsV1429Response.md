---
id: list-tags-v1429-response
title: ListTagsV1429Response
pagination_label: ListTagsV1429Response
sidebar_label: ListTagsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTagsV1429Response', 'ListTagsV1429Response'] 
slug: /tools/sdk/powershell/tags/models/list-tags-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListTagsV1429Response', 'ListTagsV1429Response']
---


# ListTagsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTagsV1429Response = Initialize-ListTagsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListTagsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

