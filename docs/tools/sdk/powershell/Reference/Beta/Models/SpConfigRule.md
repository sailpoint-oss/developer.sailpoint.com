---
id: beta-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigRule', 'BetaSpConfigRule'] 
slug: /tools/sdk/powershell/beta/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule', 'BetaSpConfigRule']
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
$SpConfigRule = Initialize-BetaSpConfigRule  -Path $.enabled `
 -Value null `
 -Modes [RESTORE, PROMOTE]
```

- Convert the resource to JSON
```powershell
$SpConfigRule | ConvertTo-JSON
```


[[Back to top]](#) 

