---
id: taskresultdetails-messages-inner
title: TaskresultdetailsMessagesInner
pagination_label: TaskresultdetailsMessagesInner
sidebar_label: TaskresultdetailsMessagesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskresultdetailsMessagesInner', 'TaskresultdetailsMessagesInner'] 
slug: /tools/sdk/python/reports-data-extraction/models/taskresultdetails-messages-inner
tags: ['SDK', 'Software Development Kit', 'TaskresultdetailsMessagesInner', 'TaskresultdetailsMessagesInner']
---

# TaskresultdetailsMessagesInner


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
from sailpoint.reports_data_extraction.models.taskresultdetails_messages_inner import TaskresultdetailsMessagesInner

taskresultdetails_messages_inner = TaskresultdetailsMessagesInner(
type='WARN',
error=False,
warning=True,
key='The following account(s) failed to correlate: A,B,C',
localized_text='The following account(s) failed to correlate: A,B,C'
)

```
[[Back to top]](#) 

