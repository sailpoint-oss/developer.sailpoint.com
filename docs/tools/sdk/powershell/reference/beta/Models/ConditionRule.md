---
id: condition-rule
title: ConditionRule
pagination_label: ConditionRule
sidebar_label: ConditionRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConditionRule'] 
slug: /tools/sdk/powershell/beta/models/condition-rule
tags: ['SDK', 'Software Development Kit', 'ConditionRule']
---


# ConditionRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceType** |  Pointer to  **Enum** [  "INPUT",    "ELEMENT" ] | Defines the type of object being selected. It will be either a reference to a form input (by input name) or a form element (by technical key). INPUT ConditionRuleSourceTypeInput ELEMENT ConditionRuleSourceTypeElement | [optional] 
**Source** |  Pointer to **String** | Source - if the sourceType is ConditionRuleSourceTypeInput, the source type is the name of the form input to accept. However, if the sourceType is ConditionRuleSourceTypeElement, the source is the name of a technical key of an element to retrieve its value. | [optional] 
**Operator** |  Pointer to  **Enum** [  "EQ",    "NE",    "CO",    "NOT_CO",    "IN",    "NOT_IN",    "EM",    "NOT_EM",    "SW",    "NOT_SW",    "EW",    "NOT_EW" ] | ConditionRuleComparisonOperatorType value. EQ ConditionRuleComparisonOperatorTypeEquals  This comparison operator compares the source and target for equality. NE ConditionRuleComparisonOperatorTypeNotEquals  This comparison operator compares the source and target for inequality. CO ConditionRuleComparisonOperatorTypeContains  This comparison operator searches the source to see whether it contains the value. NOT_CO ConditionRuleComparisonOperatorTypeNotContains IN ConditionRuleComparisonOperatorTypeIncludes  This comparison operator searches the source if it equals any of the values. NOT_IN ConditionRuleComparisonOperatorTypeNotIncludes EM ConditionRuleComparisonOperatorTypeEmpty NOT_EM ConditionRuleComparisonOperatorTypeNotEmpty SW ConditionRuleComparisonOperatorTypeStartsWith  Checks whether a string starts with another substring of the same string. This operator is case-sensitive. NOT_SW ConditionRuleComparisonOperatorTypeNotStartsWith EW ConditionRuleComparisonOperatorTypeEndsWith  Checks whether a string ends with another substring of the same string. This operator is case-sensitive. NOT_EW ConditionRuleComparisonOperatorTypeNotEndsWith | [optional] 
**ValueType** |  Pointer to  **Enum** [  "STRING",    "STRING_LIST",    "INPUT",    "ELEMENT",    "LIST",    "BOOLEAN" ] | ConditionRuleValueType type. STRING ConditionRuleValueTypeString  This value is a static string. STRING_LIST ConditionRuleValueTypeStringList  This value is an array of string values. INPUT ConditionRuleValueTypeInput  This value is a reference to a form input. ELEMENT ConditionRuleValueTypeElement  This value is a reference to a form element (by technical key). LIST ConditionRuleValueTypeList BOOLEAN ConditionRuleValueTypeBoolean | [optional] 
**Value** |  Pointer to **String** | Based on the ValueType. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConditionRule = Initialize-PSSailpoint.BetaConditionRule  -SourceType ELEMENT `
 -Source department `
 -Operator EQ `
 -ValueType STRING `
 -Value Engineering
```

- Convert the resource to JSON
```powershell
$ConditionRule | ConvertTo-JSON
```


[[Back to top]](#) 

