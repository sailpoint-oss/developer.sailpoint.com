---
id: list-tagged-objects-v1429-response
title: ListTaggedObjectsV1429Response
pagination_label: ListTaggedObjectsV1429Response
sidebar_label: ListTaggedObjectsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTaggedObjectsV1429Response', 'ListTaggedObjectsV1429Response'] 
slug: /tools/sdk/powershell/taggedobjects/models/list-tagged-objects-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListTaggedObjectsV1429Response', 'ListTaggedObjectsV1429Response']
---


# ListTaggedObjectsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTaggedObjectsV1429Response = Initialize-ListTaggedObjectsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListTaggedObjectsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

