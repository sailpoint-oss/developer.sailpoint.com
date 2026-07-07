---
id: spconfigrules
title: Spconfigrules
pagination_label: Spconfigrules
sidebar_label: Spconfigrules
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigrules', 'Spconfigrules'] 
slug: /tools/sdk/python/sp-config/models/spconfigrules
tags: ['SDK', 'Software Development Kit', 'Spconfigrules', 'Spconfigrules']
---

# Spconfigrules

Rules to be applied to the config object during the draft process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**take_from_target_rules** | [**[]Spconfigrule**](spconfigrule) |  | [optional] 
**default_rules** | [**[]Spconfigrule**](spconfigrule) |  | [optional] 
**editable** | **bool** | Indicates whether the object can be edited. | [optional] [default to False]
}

## Example

```python
from sailpoint.sp_config.models.spconfigrules import Spconfigrules

spconfigrules = Spconfigrules(
take_from_target_rules=[
                    sailpoint.sp_config.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = ["RESTORE","PROMOTE"], )
                    ],
default_rules=[
                    sailpoint.sp_config.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = ["RESTORE","PROMOTE"], )
                    ],
editable=True
)

```
[[Back to top]](#) 

