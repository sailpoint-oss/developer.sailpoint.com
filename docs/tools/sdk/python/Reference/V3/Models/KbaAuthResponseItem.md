---
id: kba-auth-response-item
title: KbaAuthResponseItem
pagination_label: KbaAuthResponseItem
sidebar_label: KbaAuthResponseItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'KbaAuthResponseItem', 'KbaAuthResponseItem'] 
slug: /tools/sdk/python/v3/models/kba-auth-response-item
tags: ['SDK', 'Software Development Kit', 'KbaAuthResponseItem', 'KbaAuthResponseItem']
---

# KbaAuthResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_id** | **str** | The KBA question id | [optional] 
**is_verified** | **bool** | Return true if verified | [optional] 
}

## Example

```python
from sailpoint.v3.models.kba_auth_response_item import KbaAuthResponseItem

kba_auth_response_item = KbaAuthResponseItem(
question_id='089899f13a8f4da7824996191587bab9',
is_verified=True
)

```
[[Back to top]](#) 

