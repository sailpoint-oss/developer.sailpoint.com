---
id: v2024-non-employee-schema-attribute-body
title: NonEmployeeSchemaAttributeBody
pagination_label: NonEmployeeSchemaAttributeBody
sidebar_label: NonEmployeeSchemaAttributeBody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSchemaAttributeBody'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-schema-attribute-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSchemaAttributeBody']
---


# NonEmployeeSchemaAttributeBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **String** | Type of the attribute. Only type 'TEXT' is supported for custom attributes. | [required]
**Label** |  **String** | Label displayed on the UI for this schema attribute. | [required]
**TechnicalName** |  **String** | The technical name of the attribute. Must be unique per source. | [required]
**HelpText** |  Pointer to **String** | help text displayed by UI. | [optional] 
**Placeholder** |  Pointer to **String** | Hint text that fills UI box. | [optional] 
**Required** |  Pointer to **Boolean** | If true, the schema attribute is required for all non-employees in the source | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSchemaAttributeBody = Initialize-PSSailpoint.V2024NonEmployeeSchemaAttributeBody  -Type TEXT `
 -Label Account Name `
 -TechnicalName account.name `
 -HelpText The unique identifier for the account `
 -Placeholder Enter a unique user name for this account. `
 -Required true
```

- Convert the resource to JSON
```powershell
$NonEmployeeSchemaAttributeBody | ConvertTo-JSON
```


[[Back to top]](#) 

