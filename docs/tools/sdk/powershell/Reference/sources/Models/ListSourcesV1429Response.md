---
id: list-sources-v1429-response
title: ListSourcesV1429Response
pagination_label: ListSourcesV1429Response
sidebar_label: ListSourcesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSourcesV1429Response', 'ListSourcesV1429Response'] 
slug: /tools/sdk/powershell/sources/models/list-sources-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSourcesV1429Response', 'ListSourcesV1429Response']
---


# ListSourcesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSourcesV1429Response = Initialize-ListSourcesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListSourcesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

