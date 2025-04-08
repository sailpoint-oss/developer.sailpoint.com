---
id: beta-access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner', 'BetaAccessRequestDynamicApproverRequestedItemsInner'] 
slug: /tools/sdk/python/beta/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner', 'BetaAccessRequestDynamicApproverRequestedItemsInner']
---

# AccessRequestDynamicApproverRequestedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Access item's unique identifier. | [required]
**name** | **str** | Access item's name. | [required]
**description** | **str** | Access item's extended description. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Type of access item being requested. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | Action to perform on the requested access item. | [required]
**comment** | **str** | Comment from the requester about why the access is necessary. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request_dynamic_approver_requested_items_inner import AccessRequestDynamicApproverRequestedItemsInner

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

