---
id: accountcreated-event
title: AccountcreatedEvent
pagination_label: AccountcreatedEvent
sidebar_label: AccountcreatedEvent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountcreatedEvent', 'AccountcreatedEvent'] 
slug: /tools/sdk/python/triggers/models/accountcreated-event
tags: ['SDK', 'Software Development Kit', 'AccountcreatedEvent', 'AccountcreatedEvent']
---

# AccountcreatedEvent

Details about the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_CREATED_V2' ] | The type of event. | [required]
**cause** |  **Enum** [  'AGGREGATION',    'PROVISIONING' ] | The cause of the event. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountcreated_event import AccountcreatedEvent

accountcreated_event = AccountcreatedEvent(
type='ACCOUNT_CREATED_V2',
cause='AGGREGATION'
)

```
[[Back to top]](#) 

