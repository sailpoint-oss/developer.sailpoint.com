---
id: accountupdated-event
title: AccountupdatedEvent
pagination_label: AccountupdatedEvent
sidebar_label: AccountupdatedEvent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountupdatedEvent', 'AccountupdatedEvent'] 
slug: /tools/sdk/python/triggers/models/accountupdated-event
tags: ['SDK', 'Software Development Kit', 'AccountupdatedEvent', 'AccountupdatedEvent']
---

# AccountupdatedEvent

Details about the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_UPDATED_V2' ] | The type of event. | [required]
**cause** |  **Enum** [  'AGGREGATION',    'PROVISIONING',    'PASSWORD_CHANGE' ] | The cause of the event. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountupdated_event import AccountupdatedEvent

accountupdated_event = AccountupdatedEvent(
type='ACCOUNT_UPDATED_V2',
cause='AGGREGATION'
)

```
[[Back to top]](#) 

