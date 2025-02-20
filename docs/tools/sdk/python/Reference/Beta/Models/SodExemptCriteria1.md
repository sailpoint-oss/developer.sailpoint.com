---
id: beta-sod-exempt-criteria1
title: SodExemptCriteria1
pagination_label: SodExemptCriteria1
sidebar_label: SodExemptCriteria1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodExemptCriteria1', 'BetaSodExemptCriteria1'] 
slug: /tools/sdk/python/beta/models/sod-exempt-criteria1
tags: ['SDK', 'Software Development Kit', 'SodExemptCriteria1', 'BetaSodExemptCriteria1']
---

# SodExemptCriteria1

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
from sailpoint.beta.models.sod_exempt_criteria1 import SodExemptCriteria1

sod_exempt_criteria1 = SodExemptCriteria1(
existing=True,
type='IDENTITY',
id='2c918085771e9d3301773b3cb66f6398',
name='My HR Entitlement'
)

```
[[Back to top]](#) 

