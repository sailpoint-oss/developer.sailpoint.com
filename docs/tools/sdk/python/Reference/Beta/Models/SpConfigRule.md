---
id: beta-sp-config-rule
title: SpConfigRule
pagination_label: SpConfigRule
sidebar_label: SpConfigRule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigRule', 'BetaSpConfigRule'] 
slug: /tools/sdk/python/beta/models/sp-config-rule
tags: ['SDK', 'Software Development Kit', 'SpConfigRule', 'BetaSpConfigRule']
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
from sailpoint.beta.models.sp_config_rule import SpConfigRule

sp_config_rule = SpConfigRule(
path='$.enabled',
value=sailpoint.beta.models.value.value(),
mode=[RESTORE, PROMOTE]
)

```
[[Back to top]](#) 

