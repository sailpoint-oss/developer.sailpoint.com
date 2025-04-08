---
id: v2025-import-form-definitions-request-inner
title: ImportFormDefinitionsRequestInner
pagination_label: ImportFormDefinitionsRequestInner
sidebar_label: ImportFormDefinitionsRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportFormDefinitionsRequestInner', 'V2025ImportFormDefinitionsRequestInner'] 
slug: /tools/sdk/powershell/v2025/models/import-form-definitions-request-inner
tags: ['SDK', 'Software Development Kit', 'ImportFormDefinitionsRequestInner', 'V2025ImportFormDefinitionsRequestInner']
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
$ImportFormDefinitionsRequestInner = Initialize-PSSailpoint.V2025ImportFormDefinitionsRequestInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitionsRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

