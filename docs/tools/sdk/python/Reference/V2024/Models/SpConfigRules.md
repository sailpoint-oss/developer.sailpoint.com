---
id: v2024-sp-config-rules
title: SpConfigRules
pagination_label: SpConfigRules
sidebar_label: SpConfigRules
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigRules', 'V2024SpConfigRules'] 
slug: /tools/sdk/python/v2024/models/sp-config-rules
tags: ['SDK', 'Software Development Kit', 'SpConfigRules', 'V2024SpConfigRules']
---

# SpConfigRules

Rules to be applied to the config object during draft process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**take_from_target_rules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**default_rules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**editable** | **bool** | Whether this object can be edited | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.sp_config_rules import SpConfigRules

sp_config_rules = SpConfigRules(
take_from_target_rules=[
                    sailpoint.v2024.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = sailpoint.v2024.models.value.value(), 
                        mode = [RESTORE, PROMOTE], )
                    ],
default_rules=[
                    sailpoint.v2024.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = sailpoint.v2024.models.value.value(), 
                        mode = [RESTORE, PROMOTE], )
                    ],
editable=True
)

```
[[Back to top]](#) 

