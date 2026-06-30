---
id: spconfigrule
title: Spconfigrule
pagination_label: Spconfigrule
sidebar_label: Spconfigrule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Spconfigrule', 'Spconfigrule'] 
slug: /tools/sdk/python/sp-config/models/spconfigrule
tags: ['SDK', 'Software Development Kit', 'Spconfigrule', 'Spconfigrule']
---

# Spconfigrule

Format of Config Hub object rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**value** | [**SpconfigruleValue**](spconfigrule-value) |  | [optional] 
**modes** | **[]str** | Draft modes the rule will apply to. | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.spconfigrule import Spconfigrule

spconfigrule = Spconfigrule(
path='$.enabled',
value=,
modes=["RESTORE","PROMOTE"]
)

```
[[Back to top]](#) 

