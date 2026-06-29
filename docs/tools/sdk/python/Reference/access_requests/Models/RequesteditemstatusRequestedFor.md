---
id: requesteditemstatus-requested-for
title: RequesteditemstatusRequestedFor
pagination_label: RequesteditemstatusRequestedFor
sidebar_label: RequesteditemstatusRequestedFor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequesteditemstatusRequestedFor', 'RequesteditemstatusRequestedFor'] 
slug: /tools/sdk/python/access-requests/models/requesteditemstatus-requested-for
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusRequestedFor', 'RequesteditemstatusRequestedFor']
---

# RequesteditemstatusRequestedFor

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
from sailpoint.access_requests.models.requesteditemstatus_requested_for import RequesteditemstatusRequestedFor

requesteditemstatus_requested_for = RequesteditemstatusRequestedFor(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

