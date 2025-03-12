---
id: sod-violation-check
title: SodViolationCheck
pagination_label: SodViolationCheck
sidebar_label: SodViolationCheck
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationCheck', 'SodViolationCheck'] 
slug: /tools/sdk/python/v3/models/sod-violation-check
tags: ['SDK', 'Software Development Kit', 'SodViolationCheck', 'SodViolationCheck']
---

# SodViolationCheck

An object referencing an SOD violation check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The id of the original request | [required]
**created** | **datetime** | The date-time when this request was created. | [optional] [readonly] 
}

## Example

```python
from sailpoint.v3.models.sod_violation_check import SodViolationCheck

sod_violation_check = SodViolationCheck(
request_id='089899f13a8f4da7824996191587bab9',
created='2020-01-01T00:00Z'
)

```
[[Back to top]](#) 

