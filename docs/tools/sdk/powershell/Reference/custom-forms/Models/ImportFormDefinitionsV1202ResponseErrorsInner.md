---
id: import-form-definitions-v1202-response-errors-inner
title: ImportFormDefinitionsV1202ResponseErrorsInner
pagination_label: ImportFormDefinitionsV1202ResponseErrorsInner
sidebar_label: ImportFormDefinitionsV1202ResponseErrorsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitionsV1202ResponseErrorsInner', 'ImportFormDefinitionsV1202ResponseErrorsInner'] 
slug: /tools/sdk/powershell/customforms/models/import-form-definitions-v1202-response-errors-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsV1202ResponseErrorsInner', 'ImportFormDefinitionsV1202ResponseErrorsInner']
---


# ImportFormDefinitionsV1202ResponseErrorsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 |  | [optional] 
**Key** | **String** |  | [optional] 
**Text** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitionsV1202ResponseErrorsInner = Initialize-ImportFormDefinitionsV1202ResponseErrorsInner  -Detail null `
 -Key null `
 -Text null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitionsV1202ResponseErrorsInner | ConvertTo-JSON
```


[[Back to top]](#) 

