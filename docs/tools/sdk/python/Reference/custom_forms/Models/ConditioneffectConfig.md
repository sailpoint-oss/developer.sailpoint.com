---
id: conditioneffect-config
title: ConditioneffectConfig
pagination_label: ConditioneffectConfig
sidebar_label: ConditioneffectConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConditioneffectConfig', 'ConditioneffectConfig'] 
slug: /tools/sdk/python/custom-forms/models/conditioneffect-config
tags: ['SDK', 'Software Development Kit', 'ConditioneffectConfig', 'ConditioneffectConfig']
---

# ConditioneffectConfig

Arbitrary map containing a configuration based on the EffectType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value_label** | **str** | Effect type's label. | [optional] 
**element** | **str** | Element's identifier. | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.conditioneffect_config import ConditioneffectConfig

conditioneffect_config = ConditioneffectConfig(
default_value_label='Access to Remove',
element='8110662963316867'
)

```
[[Back to top]](#) 

