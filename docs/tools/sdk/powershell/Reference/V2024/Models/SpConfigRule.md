---
id: v2024-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigRule', 'V2024SpConfigRule'] 
slug: /tools/sdk/powershell/v2024/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule', 'V2024SpConfigRule']
---


# SpConfigRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **String** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**Value** | [**SpConfigRuleValue**](sp-config-rule-value) |  | [optional] 
**Modes** | **[]String** | Draft modes the rule will apply to. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigRule = Initialize-V2024SpConfigRule  -Path $.enabled `
 -Value null `
 -Modes [RESTORE, PROMOTE]
```

- Convert the resource to JSON
```powershell
$SpConfigRule | ConvertTo-JSON
```


[[Back to top]](#) 

