---
id: conditioneffect
title: Conditioneffect
pagination_label: Conditioneffect
sidebar_label: Conditioneffect
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Conditioneffect', 'Conditioneffect'] 
slug: /tools/sdk/python/custom-forms/models/conditioneffect
tags: ['SDK', 'Software Development Kit', 'Conditioneffect', 'Conditioneffect']
---

# Conditioneffect

Effect produced by a condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect_type** |  **Enum** [  'HIDE',    'SHOW',    'DISABLE',    'ENABLE',    'REQUIRE',    'OPTIONAL',    'SUBMIT_MESSAGE',    'SUBMIT_NOTIFICATION',    'SET_DEFAULT_VALUE' ] | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [optional] 
**config** | [**ConditioneffectConfig**](conditioneffect-config) |  | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.conditioneffect import Conditioneffect

conditioneffect = Conditioneffect(
effect_type='HIDE',
config=sailpoint.custom_forms.models.conditioneffect_config.conditioneffect_config(
                    default_value_label = 'Access to Remove', 
                    element = '8110662963316867', )
)

```
[[Back to top]](#) 

