---
id: task-result-details-messages-inner
title: TaskResultDetailsMessagesInner
pagination_label: TaskResultDetailsMessagesInner
sidebar_label: TaskResultDetailsMessagesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskResultDetailsMessagesInner', 'TaskResultDetailsMessagesInner'] 
slug: /tools/sdk/python/v3/models/task-result-details-messages-inner
tags: ['SDK', 'Software Development Kit', 'TaskResultDetailsMessagesInner', 'TaskResultDetailsMessagesInner']
---

# TaskResultDetailsMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'INFO',    'WARN',    'ERROR' ] | Type of the message. | [optional] 
**error** | **bool** | Flag whether message is an error. | [optional] [default to False]
**warning** | **bool** | Flag whether message is a warning. | [optional] [default to False]
**key** | **str** | Message string identifier. | [optional] 
**localized_text** | **str** | Message context with the locale based language. | [optional] 
}

## Example

```python
from sailpoint.v3.models.task_result_details_messages_inner import TaskResultDetailsMessagesInner

task_result_details_messages_inner = TaskResultDetailsMessagesInner(
type='WARN',
error=False,
warning=True,
key='The following account(s) failed to correlate: A,B,C',
localized_text='The following account(s) failed to correlate: A,B,C'
)

```
[[Back to top]](#) 

