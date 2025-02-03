---
id: v2024-import-form-definitions202-response-errors-inner
title: ImportFormDefinitions202ResponseErrorsInner
pagination_label: ImportFormDefinitions202ResponseErrorsInner
sidebar_label: ImportFormDefinitions202ResponseErrorsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitions202ResponseErrorsInner', 'V2024ImportFormDefinitions202ResponseErrorsInner'] 
slug: /tools/sdk/powershell/v2024/models/import-form-definitions202-response-errors-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitions202ResponseErrorsInner', 'V2024ImportFormDefinitions202ResponseErrorsInner']
---


# ImportFormDefinitions202ResponseErrorsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** |  Pointer to [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 |  | [optional] 
**Key** |  Pointer to **String** |  | [optional] 
**Text** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitions202ResponseErrorsInner = Initialize-PSSailpoint.V2024ImportFormDefinitions202ResponseErrorsInner  -Detail null `
 -Key null `
 -Text null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitions202ResponseErrorsInner | ConvertTo-JSON
```


[[Back to top]](#) 

