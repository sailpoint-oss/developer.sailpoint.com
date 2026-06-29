---
id: nonemployeeschemaattribute
title: Nonemployeeschemaattribute
pagination_label: Nonemployeeschemaattribute
sidebar_label: Nonemployeeschemaattribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeeschemaattribute', 'Nonemployeeschemaattribute'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeeschemaattribute
tags: ['SDK', 'Software Development Kit', 'Nonemployeeschemaattribute', 'Nonemployeeschemaattribute']
---


# Nonemployeeschemaattribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Schema Attribute Id | [optional] 
**System** | **Boolean** | True if this schema attribute is mandatory on all non-employees sources. | [optional] [default to $false]
**Modified** | **System.DateTime** | When the schema attribute was last modified. | [optional] 
**Created** | **System.DateTime** | When the schema attribute was created. | [optional] 
**Type** | [**Nonemployeeschemaattributetype**](nonemployeeschemaattributetype) |  | [required]
**Label** | **String** | Label displayed on the UI for this schema attribute. | [required]
**TechnicalName** | **String** | The technical name of the attribute. Must be unique per source. | [required]
**HelpText** | **String** | help text displayed by UI. | [optional] 
**Placeholder** | **String** | Hint text that fills UI box. | [optional] 
**Required** | **Boolean** | If true, the schema attribute is required for all non-employees in the source | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Nonemployeeschemaattribute = Initialize-Nonemployeeschemaattribute  -Id ac110005-7156-1150-8171-5b292e3e0084 `
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
$Nonemployeeschemaattribute | ConvertTo-JSON
```


[[Back to top]](#) 

