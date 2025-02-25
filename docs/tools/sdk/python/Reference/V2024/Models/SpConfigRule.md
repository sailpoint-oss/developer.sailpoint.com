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

Format of Config Hub Object Rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | JSONPath expression denoting the path within the object where a value substitution should be applied | [optional] 
**value** | **object** | Value to be assigned at the jsonPath location within the object | [optional] 
**mode** | **[]str** | Draft modes to which this rule will apply | [optional] 
}

## Example

```python
from sailpoint.v2024.models.sp_config_rule import SpConfigRule

sp_config_rule = SpConfigRule(
path='$.enabled',
value=sailpoint.v2024.models.value.value(),
mode=[RESTORE, PROMOTE]
)

```
[[Back to top]](#) 

