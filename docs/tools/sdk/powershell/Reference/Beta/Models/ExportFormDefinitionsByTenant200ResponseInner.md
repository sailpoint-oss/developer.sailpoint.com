---
id: beta-export-form-definitions-by-tenant200-response-inner
title: ExportFormDefinitionsByTenant200ResponseInner
pagination_label: ExportFormDefinitionsByTenant200ResponseInner
sidebar_label: ExportFormDefinitionsByTenant200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportFormDefinitionsByTenant200ResponseInner', 'BetaExportFormDefinitionsByTenant200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/export-form-definitions-by-tenant200-response-inner
tags: ['SDK', 'Software Development Kit', 'ExportFormDefinitionsByTenant200ResponseInner', 'BetaExportFormDefinitionsByTenant200ResponseInner']
---


# ExportFormDefinitionsByTenant200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**Self** | [**FormDefinitionSelfImportExportDto**](form-definition-self-import-export-dto) |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportFormDefinitionsByTenant200ResponseInner = Initialize-BetaExportFormDefinitionsByTenant200ResponseInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ExportFormDefinitionsByTenant200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

