---
id: beta-load-accounts-task-task-messages-inner
title: LoadAccountsTaskTaskMessagesInner
pagination_label: LoadAccountsTaskTaskMessagesInner
sidebar_label: LoadAccountsTaskTaskMessagesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadAccountsTaskTaskMessagesInner', 'BetaLoadAccountsTaskTaskMessagesInner'] 
slug: /tools/sdk/python/beta/models/load-accounts-task-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskMessagesInner', 'BetaLoadAccountsTaskTaskMessagesInner']
---

# LoadAccountsTaskTaskMessagesInner


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
from sailpoint.beta.models.load_accounts_task_task_messages_inner import LoadAccountsTaskTaskMessagesInner

load_accounts_task_task_messages_inner = LoadAccountsTaskTaskMessagesInner(
type='WARN',
error=False,
warning=True,
key='This aggregation failed because the currently running aggregation must complete before the next one can start.',
localized_text='This aggregation failed because the currently running aggregation must complete before the next one can start.'
)

```
[[Back to top]](#) 

