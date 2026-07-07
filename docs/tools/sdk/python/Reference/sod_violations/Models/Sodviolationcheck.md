---
id: sodviolationcheck
title: Sodviolationcheck
pagination_label: Sodviolationcheck
sidebar_label: Sodviolationcheck
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodviolationcheck', 'Sodviolationcheck'] 
slug: /tools/sdk/python/sod-violations/models/sodviolationcheck
tags: ['SDK', 'Software Development Kit', 'Sodviolationcheck', 'Sodviolationcheck']
---

# Sodviolationcheck

An object referencing an SOD violation check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The id of the original request | [required]
**created** | **datetime** | The date-time when this request was created. | [optional] [readonly] 
}

## Example

```python
from sailpoint.sod_violations.models.sodviolationcheck import Sodviolationcheck

sodviolationcheck = Sodviolationcheck(
request_id='089899f13a8f4da7824996191587bab9',
created='2020-01-01T00:00Z'
)

```
[[Back to top]](#) 

