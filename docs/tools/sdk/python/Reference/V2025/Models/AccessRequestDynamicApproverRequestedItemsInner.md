---
id: v2025-access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner', 'V2025AccessRequestDynamicApproverRequestedItemsInner'] 
slug: /tools/sdk/python/v2025/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner', 'V2025AccessRequestDynamicApproverRequestedItemsInner']
---

# AccessRequestDynamicApproverRequestedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the access item. | [required]
**name** | **str** | Human friendly name of the access item. | [required]
**description** | **str** | Extended description of the access item. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of access item being requested. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | Grant or revoke the access item | [required]
**comment** | **str** | A comment from the requestor on why the access is needed. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_request_dynamic_approver_requested_items_inner import AccessRequestDynamicApproverRequestedItemsInner

access_request_dynamic_approver_requested_items_inner = AccessRequestDynamicApproverRequestedItemsInner(
id='2c91808b6ef1d43e016efba0ce470904',
name='Engineering Access',
description='Engineering Access',
type=ACCESS_PROFILE,
operation=Add,
comment='William needs this access for his day to day job activities.'
)

```
[[Back to top]](#) 

