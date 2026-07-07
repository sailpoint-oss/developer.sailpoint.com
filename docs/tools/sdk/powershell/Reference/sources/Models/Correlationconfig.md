---
id: correlationconfig
title: Correlationconfig
pagination_label: Correlationconfig
sidebar_label: Correlationconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Correlationconfig', 'Correlationconfig'] 
slug: /tools/sdk/powershell/sources/models/correlationconfig
tags: ['SDK', 'Software Development Kit', 'Correlationconfig', 'Correlationconfig']
---


# Correlationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the correlation configuration. | [optional] 
**Name** | **String** | The name of the correlation configuration. | [optional] 
**AttributeAssignments** | [**[]CorrelationconfigAttributeAssignmentsInner**](correlationconfig-attribute-assignments-inner) | The list of attribute assignments of the correlation configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$Correlationconfig = Initialize-Correlationconfig  -Id 2c9180835d191a86015d28455b4a2329 `
 -Name Source [source] Account Correlation `
 -AttributeAssignments null
```

- Convert the resource to JSON
```powershell
$Correlationconfig | ConvertTo-JSON
```


[[Back to top]](#) 

