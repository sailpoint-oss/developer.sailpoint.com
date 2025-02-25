---
id: v2024-condition-effect
title: ConditionEffect
pagination_label: ConditionEffect
sidebar_label: ConditionEffect
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConditionEffect', 'V2024ConditionEffect'] 
slug: /tools/sdk/python/v2024/models/condition-effect
tags: ['SDK', 'Software Development Kit', 'ConditionEffect', 'V2024ConditionEffect']
---

# ConditionEffect

Effect produced by a condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect_type** |  **Enum** [  'HIDE',    'SHOW',    'DISABLE',    'ENABLE',    'REQUIRE',    'OPTIONAL',    'SUBMIT_MESSAGE',    'SUBMIT_NOTIFICATION',    'SET_DEFAULT_VALUE' ] | Type of effect to perform when the conditions are evaluated for this logic block. HIDE ConditionEffectTypeHide  Disables validations. SHOW ConditionEffectTypeShow  Enables validations. DISABLE ConditionEffectTypeDisable  Disables validations. ENABLE ConditionEffectTypeEnable  Enables validations. REQUIRE ConditionEffectTypeRequire OPTIONAL ConditionEffectTypeOptional SUBMIT_MESSAGE ConditionEffectTypeSubmitMessage SUBMIT_NOTIFICATION ConditionEffectTypeSubmitNotification SET_DEFAULT_VALUE ConditionEffectTypeSetDefaultValue  This value is ignored on purpose. | [optional] 
**config** | [**ConditionEffectConfig**](condition-effect-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.condition_effect import ConditionEffect

condition_effect = ConditionEffect(
effect_type='HIDE',
config=sailpoint.v2024.models.condition_effect_config.ConditionEffect_config(
                    default_value_label = 'Access to Remove', 
                    element = '8110662963316867', )
)

```
[[Back to top]](#) 

