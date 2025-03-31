---
id: requested-item-status-requested-for
title: RequestedItemStatusRequestedFor
pagination_label: RequestedItemStatusRequestedFor
sidebar_label: RequestedItemStatusRequestedFor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusRequestedFor', 'RequestedItemStatusRequestedFor'] 
slug: /tools/sdk/python/v3/models/requested-item-status-requested-for
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequestedFor', 'RequestedItemStatusRequestedFor']
---

# RequestedItemStatusRequestedFor

Identity access was requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v3.models.requested_item_status_requested_for import RequestedItemStatusRequestedFor

requested_item_status_requested_for = RequestedItemStatusRequestedFor(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

