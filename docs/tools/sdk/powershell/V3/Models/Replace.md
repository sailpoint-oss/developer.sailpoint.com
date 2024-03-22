---
id: replace
title: Replace
pagination_label: Replace
sidebar_label: Replace
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Replace'] 
slug: /tools/sdk/powershell/v3/models/replace
tags: ['SDK', 'Software Development Kit', 'Replace']
---


# Replace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Regex** |  **String** | This can be a string or a regex pattern in which you want to replace. | 
**Replacement** |  **String** | This is the replacement string that should be substituded wherever the string or pattern is found. | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**](any-type) | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Replace = Initialize-PSSailpointReplace  -Regex [^a-zA-Z] `
 -Replacement   `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Replace | ConvertTo-JSON
```


[[Back to top]](#) 

