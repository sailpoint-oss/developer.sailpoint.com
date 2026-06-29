---
id: list-tagged-objects-v1401-response
title: ListTaggedObjectsV1401Response
pagination_label: ListTaggedObjectsV1401Response
sidebar_label: ListTaggedObjectsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListTaggedObjectsV1401Response', 'ListTaggedObjectsV1401Response'] 
slug: /tools/sdk/powershell/taggedobjects/models/list-tagged-objects-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListTaggedObjectsV1401Response', 'ListTaggedObjectsV1401Response']
---


# ListTaggedObjectsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListTaggedObjectsV1401Response = Initialize-ListTaggedObjectsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListTaggedObjectsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

