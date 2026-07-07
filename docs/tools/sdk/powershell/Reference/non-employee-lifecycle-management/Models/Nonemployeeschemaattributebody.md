---
id: nonemployeeschemaattributebody
title: Nonemployeeschemaattributebody
pagination_label: Nonemployeeschemaattributebody
sidebar_label: Nonemployeeschemaattributebody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeeschemaattributebody', 'Nonemployeeschemaattributebody'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeeschemaattributebody
tags: ['SDK', 'Software Development Kit', 'Nonemployeeschemaattributebody', 'Nonemployeeschemaattributebody']
---


# Nonemployeeschemaattributebody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Type of the attribute. Only type 'TEXT' is supported for custom attributes. | [required]
**Label** | **String** | Label displayed on the UI for this schema attribute. | [required]
**TechnicalName** | **String** | The technical name of the attribute. Must be unique per source. | [required]
**HelpText** | **String** | help text displayed by UI. | [optional] 
**Placeholder** | **String** | Hint text that fills UI box. | [optional] 
**Required** | **Boolean** | If true, the schema attribute is required for all non-employees in the source | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeeschemaattributebody = Initialize-Nonemployeeschemaattributebody  -Type TEXT `
 -Label Account Name `
 -TechnicalName account.name `
 -HelpText The unique identifier for the account `
 -Placeholder Enter a unique user name for this account. `
 -Required true
```

- Convert the resource to JSON
```powershell
$Nonemployeeschemaattributebody | ConvertTo-JSON
```


[[Back to top]](#) 

