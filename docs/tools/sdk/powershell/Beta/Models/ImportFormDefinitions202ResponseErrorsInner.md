---
id: import-form-definitions202-response-errors-inner
title: ImportFormDefinitions202ResponseErrorsInner
pagination_label: ImportFormDefinitions202ResponseErrorsInner
sidebar_label: ImportFormDefinitions202ResponseErrorsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ImportFormDefinitions202ResponseErrorsInner'] 
slug: /tools/sdk/powershell/beta/models/import-form-definitions202-response-errors-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitions202ResponseErrorsInner']
---


# ImportFormDefinitions202ResponseErrorsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** |  Pointer to [**map[string]SystemCollectionsHashtable**](system-collections-hashtable) |  | [optional] 
**Key** |  Pointer to **String** |  | [optional] 
**Text** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitions202ResponseErrorsInner = Initialize-PSSailpointBetaImportFormDefinitions202ResponseErrorsInner  -Detail null `
 -Key null `
 -Text null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitions202ResponseErrorsInner | ConvertTo-JSON
```


[[Back to top]](#) 

