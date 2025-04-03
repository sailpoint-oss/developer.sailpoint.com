---
id: v2025-sp-config-rules
title: SpConfigRules
pagination_label: SpConfigRules
sidebar_label: SpConfigRules
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SpConfigRules', 'V2025SpConfigRules'] 
slug: /tools/sdk/python/v2025/models/sp-config-rules
tags: ['SDK', 'Software Development Kit', 'SpConfigRules', 'V2025SpConfigRules']
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
from sailpoint.v2025.models.sp_config_rules import SpConfigRules

sp_config_rules = SpConfigRules(
take_from_target_rules=[
                    sailpoint.v2025.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = [RESTORE, PROMOTE], )
                    ],
default_rules=[
                    sailpoint.v2025.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = [RESTORE, PROMOTE], )
                    ],
editable=True
)

```
[[Back to top]](#) 

