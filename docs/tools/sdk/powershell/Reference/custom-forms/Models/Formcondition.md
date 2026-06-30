---
id: formcondition
title: Formcondition
pagination_label: Formcondition
sidebar_label: Formcondition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formcondition', 'Formcondition'] 
slug: /tools/sdk/powershell/customforms/models/formcondition
tags: ['SDK', 'Software Development Kit', 'Formcondition', 'Formcondition']
---


# Formcondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleOperator** |  **Enum** [  "AND",    "OR" ] | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**Rules** | [**[]Conditionrule**](conditionrule) | List of rules. | [optional] 
**Effects** | [**[]Conditioneffect**](conditioneffect) | List of effects. | [optional] 

## Examples

- Prepare the resource
```powershell
$Formcondition = Initialize-Formcondition  -RuleOperator AND `
 -Rules null `
 -Effects null
```

- Convert the resource to JSON
```powershell
$Formcondition | ConvertTo-JSON
```


[[Back to top]](#) 

