---
id: conditionrule
title: Conditionrule
pagination_label: Conditionrule
sidebar_label: Conditionrule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Conditionrule', 'Conditionrule'] 
slug: /tools/sdk/python/custom-forms/models/conditionrule
tags: ['SDK', 'Software Development Kit', 'Conditionrule', 'Conditionrule']
---

# Conditionrule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_type** |  **Enum** [  'INPUT',    'ELEMENT' ] | Defines the type of object being selected. It will be either a reference to a form input (by input name) or a form element (by technical key). INPUT ConditionRuleSourceTypeInput ELEMENT ConditionRuleSourceTypeElement | [optional] 
**source** | **str** | Source - if the sourceType is ConditionRuleSourceTypeInput, the source type is the name of the form input to accept. However, if the sourceType is ConditionRuleSourceTypeElement, the source is the name of a technical key of an element to retrieve its value. | [optional] 
**operator** |  **Enum** [  'EQ',    'NE',    'CO',    'NOT_CO',    'IN',    'NOT_IN',    'EM',    'NOT_EM',    'SW',    'NOT_SW',    'EW',    'NOT_EW' ] | ConditionRuleComparisonOperatorType value. EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality. NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality. CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value. NOT_CO ConditionRuleComparisonOperatorTypeNotContains IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values. NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes EM ConditionRuleComparisonOperatorTypeEmpty NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive. NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive. NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith | [optional] 
**value_type** |  **Enum** [  'STRING',    'STRING_LIST',    'INPUT',    'ELEMENT',    'LIST',    'BOOLEAN' ] | ConditionRuleValueType type. STRING ConditionRuleValueTypeString  This value is a static string. STRING_LIST ConditionRuleValueTypeStringList  This value is an array of string values. INPUT ConditionRuleValueTypeInput  This value is a reference to a form input. ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key). LIST ConditionRuleValueTypeList BOOLEAN ConditionRuleValueTypeBoolean | [optional] 
**value** | **str** | Based on the ValueType. | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.conditionrule import Conditionrule

conditionrule = Conditionrule(
source_type='ELEMENT',
source='department',
operator='EQ',
value_type='STRING',
value='Engineering'
)

```
[[Back to top]](#) 

