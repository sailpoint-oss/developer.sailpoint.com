---
id: completedapproval-requested-for
title: CompletedapprovalRequestedFor
pagination_label: CompletedapprovalRequestedFor
sidebar_label: CompletedapprovalRequestedFor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompletedapprovalRequestedFor', 'CompletedapprovalRequestedFor'] 
slug: /tools/sdk/python/access-request-approvals/models/completedapproval-requested-for
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalRequestedFor', 'CompletedapprovalRequestedFor']
---

# CompletedapprovalRequestedFor

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
from sailpoint.access_request_approvals.models.completedapproval_requested_for import CompletedapprovalRequestedFor

completedapproval_requested_for = CompletedapprovalRequestedFor(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

