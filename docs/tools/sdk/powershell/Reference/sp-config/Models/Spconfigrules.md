---
id: spconfigrules
title: Spconfigrules
pagination_label: Spconfigrules
sidebar_label: Spconfigrules
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spconfigrules', 'Spconfigrules'] 
slug: /tools/sdk/powershell/spconfig/models/spconfigrules
tags: ['SDK', 'Software Development Kit', 'Spconfigrules', 'Spconfigrules']
---


# Spconfigrules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TakeFromTargetRules** | [**[]Spconfigrule**](spconfigrule) |  | [optional] 
**DefaultRules** | [**[]Spconfigrule**](spconfigrule) |  | [optional] 
**Editable** | **Boolean** | Indicates whether the object can be edited. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Spconfigrules = Initialize-Spconfigrules  -TakeFromTargetRules null `
 -DefaultRules null `
 -Editable true
```

- Convert the resource to JSON
```powershell
$Spconfigrules | ConvertTo-JSON
```


[[Back to top]](#) 

