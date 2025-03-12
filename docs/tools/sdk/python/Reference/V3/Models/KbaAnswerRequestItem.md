---
id: kba-answer-request-item
title: KbaAnswerRequestItem
pagination_label: KbaAnswerRequestItem
sidebar_label: KbaAnswerRequestItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'KbaAnswerRequestItem', 'KbaAnswerRequestItem'] 
slug: /tools/sdk/python/v3/models/kba-answer-request-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequestItem', 'KbaAnswerRequestItem']
---

# KbaAnswerRequestItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Question Id | [required]
**answer** | **str** | An answer for the KBA question | [required]
}

## Example

```python
from sailpoint.v3.models.kba_answer_request_item import KbaAnswerRequestItem

kba_answer_request_item = KbaAnswerRequestItem(
id='c54fee53-2d63-4fc5-9259-3e93b9994135',
answer='Your answer'
)

```
[[Back to top]](#) 

