---
id: sodexemptcriteria
title: Sodexemptcriteria
pagination_label: Sodexemptcriteria
sidebar_label: Sodexemptcriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodexemptcriteria', 'Sodexemptcriteria'] 
slug: /tools/sdk/python/access-requests/models/sodexemptcriteria
tags: ['SDK', 'Software Development Kit', 'Sodexemptcriteria', 'Sodexemptcriteria']
---

# Sodexemptcriteria

Details of the Entitlement criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing** | **bool** | If the entitlement already belonged to the user or not. | [optional] [default to False]
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | Entitlement ID | [optional] 
**name** | **str** | Entitlement name | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.sodexemptcriteria import Sodexemptcriteria

sodexemptcriteria = Sodexemptcriteria(
existing=True,
type='IDENTITY',
id='2c918085771e9d3301773b3cb66f6398',
name='My HR Entitlement'
)

```
[[Back to top]](#) 

