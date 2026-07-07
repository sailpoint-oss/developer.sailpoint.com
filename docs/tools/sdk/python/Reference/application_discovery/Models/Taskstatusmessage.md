---
id: taskstatusmessage
title: Taskstatusmessage
pagination_label: Taskstatusmessage
sidebar_label: Taskstatusmessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskstatusmessage', 'Taskstatusmessage'] 
slug: /tools/sdk/python/application-discovery/models/taskstatusmessage
tags: ['SDK', 'Software Development Kit', 'Taskstatusmessage', 'Taskstatusmessage']
---

# Taskstatusmessage

TaskStatus Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'INFO',    'WARN',    'ERROR' ] | Type of the message | [required]
**localized_text** | [**Localizedmessage**](localizedmessage) |  | [required]
**key** | **str** | Key of the message | [required]
**parameters** | [**[]TaskstatusmessageParametersInner**](taskstatusmessage-parameters-inner) | Message parameters for internationalization | [required]
}

## Example

```python
from sailpoint.application_discovery.models.taskstatusmessage import Taskstatusmessage

taskstatusmessage = Taskstatusmessage(
type='INFO',
localized_text=sailpoint.application_discovery.models.localized_message.Localized Message(
                    locale = 'An error has occurred!', 
                    message = 'Error has occurred!', ),
key='akey',
parameters=[{"name":"value"}]
)

```
[[Back to top]](#) 

