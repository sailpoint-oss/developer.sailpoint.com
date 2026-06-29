---
id: loadaccountstask-task-messages-inner
title: LoadaccountstaskTaskMessagesInner
pagination_label: LoadaccountstaskTaskMessagesInner
sidebar_label: LoadaccountstaskTaskMessagesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadaccountstaskTaskMessagesInner', 'LoadaccountstaskTaskMessagesInner'] 
slug: /tools/sdk/python/sources/models/loadaccountstask-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskMessagesInner', 'LoadaccountstaskTaskMessagesInner']
---

# LoadaccountstaskTaskMessagesInner


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
from sailpoint.sources.models.loadaccountstask_task_messages_inner import LoadaccountstaskTaskMessagesInner

loadaccountstask_task_messages_inner = LoadaccountstaskTaskMessagesInner(
type='WARN',
error=False,
warning=True,
key='This aggregation failed because the currently running aggregation must complete before the next one can start.',
localized_text='This aggregation failed because the currently running aggregation must complete before the next one can start.'
)

```
[[Back to top]](#) 

