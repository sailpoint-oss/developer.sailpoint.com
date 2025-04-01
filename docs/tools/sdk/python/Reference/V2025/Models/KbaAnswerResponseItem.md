---
id: v2025-kba-answer-response-item
title: KbaAnswerResponseItem
pagination_label: KbaAnswerResponseItem
sidebar_label: KbaAnswerResponseItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'KbaAnswerResponseItem', 'V2025KbaAnswerResponseItem'] 
slug: /tools/sdk/python/v2025/models/kba-answer-response-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerResponseItem', 'V2025KbaAnswerResponseItem']
---

# KbaAnswerResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Question Id | [required]
**question** | **str** | Question description | [required]
**has_answer** | **bool** | Denotes whether the KBA question has an answer configured for the current user | [required]
}

## Example

```python
from sailpoint.v2025.models.kba_answer_response_item import KbaAnswerResponseItem

kba_answer_response_item = KbaAnswerResponseItem(
id='c54fee53-2d63-4fc5-9259-3e93b9994135',
question='[{"text":"Nouvelle question MFA -1 ?","locale":"fr"},{"text":"MFA new question -1 ?","locale":""}]',
has_answer=True
)

```
[[Back to top]](#) 

