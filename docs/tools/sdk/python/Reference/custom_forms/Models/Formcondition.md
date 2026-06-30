---
id: formcondition
title: Formcondition
pagination_label: Formcondition
sidebar_label: Formcondition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formcondition', 'Formcondition'] 
slug: /tools/sdk/python/custom-forms/models/formcondition
tags: ['SDK', 'Software Development Kit', 'Formcondition', 'Formcondition']
---

# Formcondition

Represent a form conditional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_operator** |  **Enum** [  'AND',    'OR' ] | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**rules** | [**[]Conditionrule**](conditionrule) | List of rules. | [optional] 
**effects** | [**[]Conditioneffect**](conditioneffect) | List of effects. | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formcondition import Formcondition

formcondition = Formcondition(
rule_operator='AND',
rules=[
                    sailpoint.custom_forms.models.conditionrule.conditionrule(
                        source_type = 'ELEMENT', 
                        source = 'department', 
                        operator = 'EQ', 
                        value_type = 'STRING', 
                        value = 'Engineering', )
                    ],
effects=[
                    sailpoint.custom_forms.models.conditioneffect.conditioneffect(
                        effect_type = 'HIDE', 
                        config = sailpoint.custom_forms.models.conditioneffect_config.conditioneffect_config(
                            default_value_label = 'Access to Remove', 
                            element = '8110662963316867', ), )
                    ]
)

```
[[Back to top]](#) 

