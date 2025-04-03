---
id: v2024-access-request-pre-approval-requested-items-inner
title: AccessRequestPreApprovalRequestedItemsInner
pagination_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPreApprovalRequestedItemsInner', 'V2024AccessRequestPreApprovalRequestedItemsInner'] 
slug: /tools/sdk/python/v2024/models/access-request-pre-approval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApprovalRequestedItemsInner', 'V2024AccessRequestPreApprovalRequestedItemsInner']
---

# AccessRequestPreApprovalRequestedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the access item being requested. | [required]
**name** | **str** | The human friendly name of the access item. | [required]
**description** | **str** | Detailed description of the access item. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of access item. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | The action to perform on the access item. | [required]
**comment** | **str** | A comment from the identity requesting the access. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_pre_approval_requested_items_inner import AccessRequestPreApprovalRequestedItemsInner

access_request_pre_approval_requested_items_inner = AccessRequestPreApprovalRequestedItemsInner(
id='2c91808b6ef1d43e016efba0ce470904',
name='Engineering Access',
description='Access to engineering database',
type=ACCESS_PROFILE,
operation=Add,
comment='William needs this access to do his job.'
)

```
[[Back to top]](#) 

