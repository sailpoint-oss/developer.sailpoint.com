---
id: v2024-non-employee-schema-attribute
title: NonEmployeeSchemaAttribute
pagination_label: NonEmployeeSchemaAttribute
sidebar_label: NonEmployeeSchemaAttribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSchemaAttribute'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-schema-attribute
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttribute']
---


# NonEmployeeSchemaAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Schema Attribute Id | [optional] 
**System** |  Pointer to **Boolean** | True if this schema attribute is mandatory on all non-employees sources. | [optional] [default to $false]
**Modified** |  Pointer to **System.DateTime** | When the schema attribute was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the schema attribute was created. | [optional] 
**Type** |  [**NonEmployeeSchemaAttributeType**](non-employee-schema-attribute-type) |  | [required]
**Label** |  **String** | Label displayed on the UI for this schema attribute. | [required]
**TechnicalName** |  **String** | The technical name of the attribute. Must be unique per source. | [required]
**HelpText** |  Pointer to **String** | help text displayed by UI. | [optional] 
**Placeholder** |  Pointer to **String** | Hint text that fills UI box. | [optional] 
**Required** |  Pointer to **Boolean** | If true, the schema attribute is required for all non-employees in the source | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$NonEmployeeSchemaAttribute = Initialize-PSSailpoint.V2024NonEmployeeSchemaAttribute  -Id ac110005-7156-1150-8171-5b292e3e0084 `
 -System true `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z `
 -Type null `
 -Label Account Name `
 -TechnicalName account.name `
 -HelpText The unique identifier for the account `
 -Placeholder Enter a unique user name for this account. `
 -Required true
```

- Convert the resource to JSON
```powershell
$NonEmployeeSchemaAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

