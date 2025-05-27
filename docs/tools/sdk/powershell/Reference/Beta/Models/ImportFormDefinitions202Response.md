---
id: beta-import-form-definitions202-response
title: ImportFormDefinitions202Response
pagination_label: ImportFormDefinitions202Response
sidebar_label: ImportFormDefinitions202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitions202Response', 'BetaImportFormDefinitions202Response'] 
slug: /tools/sdk/powershell/beta/models/import-form-definitions202-response
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitions202Response', 'BetaImportFormDefinitions202Response']
---


# ImportFormDefinitions202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**ImportedObjects** | [**[]ExportFormDefinitionsByTenant200ResponseInner**](export-form-definitions-by-tenant200-response-inner) |  | [optional] 
**Infos** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**Warnings** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitions202Response = Initialize-BetaImportFormDefinitions202Response  -Errors null `
 -ImportedObjects null `
 -Infos null `
 -Warnings null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitions202Response | ConvertTo-JSON
```


[[Back to top]](#) 

