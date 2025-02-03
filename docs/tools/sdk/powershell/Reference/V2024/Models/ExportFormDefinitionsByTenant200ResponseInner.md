---
id: v2024-export-form-definitions-by-tenant200-response-inner
title: ExportFormDefinitionsByTenant200ResponseInner
pagination_label: ExportFormDefinitionsByTenant200ResponseInner
sidebar_label: ExportFormDefinitionsByTenant200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportFormDefinitionsByTenant200ResponseInner', 'V2024ExportFormDefinitionsByTenant200ResponseInner'] 
slug: /tools/sdk/powershell/v2024/models/export-form-definitions-by-tenant200-response-inner
tags: ['SDK', 'Software Development Kit', 'ExportFormDefinitionsByTenant200ResponseInner', 'V2024ExportFormDefinitionsByTenant200ResponseInner']
---


# ExportFormDefinitionsByTenant200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**Self** | **String** |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportFormDefinitionsByTenant200ResponseInner = Initialize-PSSailpoint.V2024ExportFormDefinitionsByTenant200ResponseInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ExportFormDefinitionsByTenant200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

