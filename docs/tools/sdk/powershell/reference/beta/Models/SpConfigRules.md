---
id: beta-sp-config-rules
title: SpConfigRules
pagination_label: SpConfigRules
sidebar_label: SpConfigRules
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigRules', 'BetaSpConfigRules'] 
slug: /tools/sdk/powershell/beta/models/sp-config-rules
tags: ['SDK', 'Software Development Kit', 'SpConfigRules', 'BetaSpConfigRules']
---


# SpConfigRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TakeFromTargetRules** |  Pointer to [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**DefaultRules** |  Pointer to [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**Editable** |  Pointer to **Boolean** | Whether this object can be edited | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SpConfigRules = Initialize-PSSailpoint.BetaSpConfigRules  -TakeFromTargetRules null `
 -DefaultRules null `
 -Editable true
```

- Convert the resource to JSON
```powershell
$SpConfigRules | ConvertTo-JSON
```


[[Back to top]](#) 

