---
id: beta-condition-effect-config
title: ConditionEffectConfig
pagination_label: ConditionEffectConfig
sidebar_label: ConditionEffectConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConditionEffectConfig', 'BetaConditionEffectConfig'] 
slug: /tools/sdk/python/beta/models/condition-effect-config
tags: ['SDK', 'Software Development Kit', 'ConditionEffectConfig', 'BetaConditionEffectConfig']
---

# ConditionEffectConfig

Arbitrary map containing a configuration based on the EffectType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value_label** | **str** | Effect type's label. | [optional] 
**element** | **str** | Element's identifier. | [optional] 
}

## Example

```python
from sailpoint.beta.models.condition_effect_config import ConditionEffectConfig

condition_effect_config = ConditionEffectConfig(
default_value_label='Access to Remove',
element='8110662963316867'
)

```
[[Back to top]](#) 

