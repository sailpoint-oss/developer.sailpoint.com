---
id: import-form-definitions-v1202-response
title: ImportFormDefinitionsV1202Response
pagination_label: ImportFormDefinitionsV1202Response
sidebar_label: ImportFormDefinitionsV1202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitionsV1202Response', 'ImportFormDefinitionsV1202Response'] 
slug: /tools/sdk/powershell/customforms/models/import-form-definitions-v1202-response
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsV1202Response', 'ImportFormDefinitionsV1202Response']
---


# ImportFormDefinitionsV1202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | [**[]ImportFormDefinitionsV1202ResponseErrorsInner**](import-form-definitions-v1202-response-errors-inner) |  | [optional] 
**ImportedObjects** | [**[]ImportFormDefinitionsV1RequestInner**](import-form-definitions-v1-request-inner) |  | [optional] 
**Infos** | [**[]ImportFormDefinitionsV1202ResponseErrorsInner**](import-form-definitions-v1202-response-errors-inner) |  | [optional] 
**Warnings** | [**[]ImportFormDefinitionsV1202ResponseErrorsInner**](import-form-definitions-v1202-response-errors-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitionsV1202Response = Initialize-ImportFormDefinitionsV1202Response  -Errors null `
 -ImportedObjects null `
 -Infos null `
 -Warnings null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitionsV1202Response | ConvertTo-JSON
```


[[Back to top]](#) 

