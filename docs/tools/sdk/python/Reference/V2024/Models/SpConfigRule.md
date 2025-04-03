---
id: v2024-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigRule', 'V2024SpConfigRule'] 
slug: /tools/sdk/python/v2024/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule', 'V2024SpConfigRule']
---

# SpConfigRule

Format of Config Hub object rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**value** | [**SpConfigRuleValue**](sp-config-rule-value) |  | [optional] 
**modes** | **[]str** | Draft modes the rule will apply to. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.sp_config_rule import SpConfigRule

sp_config_rule = SpConfigRule(
path='$.enabled',
value=,
modes=[RESTORE, PROMOTE]
)

```
[[Back to top]](#) 

