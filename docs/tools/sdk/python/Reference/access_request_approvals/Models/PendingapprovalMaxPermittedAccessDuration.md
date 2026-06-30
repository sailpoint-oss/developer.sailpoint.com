---
id: pendingapproval-max-permitted-access-duration
title: PendingapprovalMaxPermittedAccessDuration
pagination_label: PendingapprovalMaxPermittedAccessDuration
sidebar_label: PendingapprovalMaxPermittedAccessDuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PendingapprovalMaxPermittedAccessDuration', 'PendingapprovalMaxPermittedAccessDuration'] 
slug: /tools/sdk/python/access-request-approvals/models/pendingapproval-max-permitted-access-duration
tags: ['SDK', 'Software Development Kit', 'PendingapprovalMaxPermittedAccessDuration', 'PendingapprovalMaxPermittedAccessDuration']
---

# PendingapprovalMaxPermittedAccessDuration

The maximum duration for which the access is permitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **int** | The numeric value of the duration. | [optional] 
**time_unit** |  **Enum** [  'HOURS',    'DAYS',    'WEEKS',    'MONTHS' ] | The time unit for the duration. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.pendingapproval_max_permitted_access_duration import PendingapprovalMaxPermittedAccessDuration

pendingapproval_max_permitted_access_duration = PendingapprovalMaxPermittedAccessDuration(
value=5,
time_unit='DAYS'
)

```
[[Back to top]](#) 

