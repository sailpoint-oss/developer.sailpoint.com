---
id: sod-exempt-criteria
title: SodExemptCriteria
pagination_label: SodExemptCriteria
sidebar_label: SodExemptCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodExemptCriteria', 'SodExemptCriteria'] 
slug: /tools/sdk/python/v3/models/sod-exempt-criteria
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria', 'SodExemptCriteria']
---

# SodExemptCriteria

Details of the Entitlement criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing** | **bool** | If the entitlement already belonged to the user or not. | [optional] [default to False]
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | Entitlement ID | [optional] 
**name** | **str** | Entitlement name | [optional] 
}

## Example

```python
from sailpoint.v3.models.sod_exempt_criteria import SodExemptCriteria

sod_exempt_criteria = SodExemptCriteria(
existing=True,
type='IDENTITY',
id='2c918085771e9d3301773b3cb66f6398',
name='My HR Entitlement'
)

```
[[Back to top]](#) 

