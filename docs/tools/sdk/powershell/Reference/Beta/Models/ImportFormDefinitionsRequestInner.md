---
id: beta-import-form-definitions-request-inner
title: ImportFormDefinitionsRequestInner
pagination_label: ImportFormDefinitionsRequestInner
sidebar_label: ImportFormDefinitionsRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitionsRequestInner', 'BetaImportFormDefinitionsRequestInner'] 
slug: /tools/sdk/powershell/beta/models/import-form-definitions-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsRequestInner', 'BetaImportFormDefinitionsRequestInner']
---


# ImportFormDefinitionsRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**Self** | **String** |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitionsRequestInner = Initialize-BetaImportFormDefinitionsRequestInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitionsRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

