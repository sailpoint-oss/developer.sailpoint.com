---
id: beta-form-condition
title: FormCondition
pagination_label: FormCondition
sidebar_label: FormCondition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormCondition', 'BetaFormCondition'] 
slug: /tools/sdk/powershell/beta/models/form-condition
tags: ['SDK', 'Software Development Kit', 'FormCondition', 'BetaFormCondition']
---


# FormCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleOperator** |  **Enum** [  "AND",    "OR" ] | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**Rules** | [**[]ConditionRule**](condition-rule) | List of rules. | [optional] 
**Effects** | [**[]ConditionEffect**](condition-effect) | List of effects. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormCondition = Initialize-BetaFormCondition  -RuleOperator AND `
 -Rules null `
 -Effects null
```

- Convert the resource to JSON
```powershell
$FormCondition | ConvertTo-JSON
```


[[Back to top]](#) 

