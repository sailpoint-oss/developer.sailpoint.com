---
id: beta-sp-config-rules
title: SpConfigRules
pagination_label: SpConfigRules
sidebar_label: SpConfigRules
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigRules', 'BetaSpConfigRules'] 
slug: /tools/sdk/python/beta/models/sp-config-rules
tags: ['SDK', 'Software Development Kit', 'SpConfigRules', 'BetaSpConfigRules']
---

# SpConfigRules

Rules to be applied to the config object during the draft process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**take_from_target_rules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**default_rules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**editable** | **bool** | Indicates whether the object can be edited. | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.sp_config_rules import SpConfigRules

sp_config_rules = SpConfigRules(
take_from_target_rules=[
                    sailpoint.beta.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = [RESTORE, PROMOTE], )
                    ],
default_rules=[
                    sailpoint.beta.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = [RESTORE, PROMOTE], )
                    ],
editable=True
)

```
[[Back to top]](#) 

