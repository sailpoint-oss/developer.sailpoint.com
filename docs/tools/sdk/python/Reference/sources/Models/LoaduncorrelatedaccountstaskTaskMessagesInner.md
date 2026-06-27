---
id: loaduncorrelatedaccountstask-task-messages-inner
title: LoaduncorrelatedaccountstaskTaskMessagesInner
pagination_label: LoaduncorrelatedaccountstaskTaskMessagesInner
sidebar_label: LoaduncorrelatedaccountstaskTaskMessagesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoaduncorrelatedaccountstaskTaskMessagesInner', 'LoaduncorrelatedaccountstaskTaskMessagesInner'] 
slug: /tools/sdk/python/sources/models/loaduncorrelatedaccountstask-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoaduncorrelatedaccountstaskTaskMessagesInner', 'LoaduncorrelatedaccountstaskTaskMessagesInner']
---

# LoaduncorrelatedaccountstaskTaskMessagesInner


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
from sailpoint.sources.models.loaduncorrelatedaccountstask_task_messages_inner import LoaduncorrelatedaccountstaskTaskMessagesInner

loaduncorrelatedaccountstask_task_messages_inner = LoaduncorrelatedaccountstaskTaskMessagesInner(
type='WARN',
error=False,
warning=True,
key='This correlation failed because the currently running correlation must complete before the next one can start.',
localized_text='This correlation failed because the currently running correlation must complete before the next one can start.'
)

```
[[Back to top]](#) 

