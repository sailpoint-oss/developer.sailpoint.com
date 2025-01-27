---
id: v2024-form-condition
title: FormCondition
pagination_label: FormCondition
sidebar_label: FormCondition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormCondition'] 
slug: /tools/sdk/powershell/v2024/models/form-condition
tags: ['SDK', 'Software Development Kit', 'FormCondition']
---


# FormCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleOperator** |  Pointer to  **Enum** [  "AND",    "OR" ] | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**Rules** |  Pointer to [**[]ConditionRule**](condition-rule) | List of rules. | [optional] 
**Effects** |  Pointer to [**[]ConditionEffect**](condition-effect) | List of effects. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormCondition = Initialize-PSSailpoint.V2024FormCondition  -RuleOperator AND `
 -Rules null `
 -Effects null
```

- Convert the resource to JSON
```powershell
$FormCondition | ConvertTo-JSON
```


[[Back to top]](#) 

