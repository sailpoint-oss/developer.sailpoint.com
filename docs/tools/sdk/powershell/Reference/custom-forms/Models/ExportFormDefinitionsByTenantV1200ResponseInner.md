---
id: export-form-definitions-by-tenant-v1200-response-inner
title: ExportFormDefinitionsByTenantV1200ResponseInner
pagination_label: ExportFormDefinitionsByTenantV1200ResponseInner
sidebar_label: ExportFormDefinitionsByTenantV1200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportFormDefinitionsByTenantV1200ResponseInner', 'ExportFormDefinitionsByTenantV1200ResponseInner'] 
slug: /tools/sdk/powershell/customforms/models/export-form-definitions-by-tenant-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'ExportFormDefinitionsByTenantV1200ResponseInner', 'ExportFormDefinitionsByTenantV1200ResponseInner']
---


# ExportFormDefinitionsByTenantV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**Formdefinitionresponse**](formdefinitionresponse) |  | [optional] 
**Self** | [**ExportFormDefinitionsByTenantV1200ResponseInnerSelf**](export-form-definitions-by-tenant-v1200-response-inner-self) |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportFormDefinitionsByTenantV1200ResponseInner = Initialize-ExportFormDefinitionsByTenantV1200ResponseInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ExportFormDefinitionsByTenantV1200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

