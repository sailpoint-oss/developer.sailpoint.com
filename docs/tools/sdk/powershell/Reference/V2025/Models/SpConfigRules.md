---
id: v2025-sp-config-rules
title: SpConfigRules
pagination_label: SpConfigRules
sidebar_label: SpConfigRules
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigRules', 'V2025SpConfigRules'] 
slug: /tools/sdk/powershell/v2025/models/sp-config-rules
tags: ['SDK', 'Software Development Kit', 'SpConfigRules', 'V2025SpConfigRules']
---


# SpConfigRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TakeFromTargetRules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**DefaultRules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**Editable** | **Boolean** | Indicates whether the object can be edited. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SpConfigRules = Initialize-V2025SpConfigRules  -TakeFromTargetRules null `
 -DefaultRules null `
 -Editable true
```

- Convert the resource to JSON
```powershell
$SpConfigRules | ConvertTo-JSON
```


[[Back to top]](#) 

