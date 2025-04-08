---
id: v2025-import-form-definitions202-response
title: ImportFormDefinitions202Response
pagination_label: ImportFormDefinitions202Response
sidebar_label: ImportFormDefinitions202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitions202Response', 'V2025ImportFormDefinitions202Response'] 
slug: /tools/sdk/powershell/v2025/models/import-form-definitions202-response
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitions202Response', 'V2025ImportFormDefinitions202Response']
---


# ImportFormDefinitions202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**ImportedObjects** | [**[]ImportFormDefinitionsRequestInner**](import-form-definitions-request-inner) |  | [optional] 
**Infos** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 
**Warnings** | [**[]ImportFormDefinitions202ResponseErrorsInner**](import-form-definitions202-response-errors-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitions202Response = Initialize-PSSailpoint.V2025ImportFormDefinitions202Response  -Errors null `
 -ImportedObjects null `
 -Infos null `
 -Warnings null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitions202Response | ConvertTo-JSON
```


[[Back to top]](#) 

