---
id: beta-access-request-pre-approval-requested-items-inner
title: AccessRequestPreApprovalRequestedItemsInner
pagination_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPreApprovalRequestedItemsInner', 'BetaAccessRequestPreApprovalRequestedItemsInner'] 
slug: /tools/sdk/python/beta/models/access-request-pre-approval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApprovalRequestedItemsInner', 'BetaAccessRequestPreApprovalRequestedItemsInner']
---

# AccessRequestPreApprovalRequestedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Access item's unique ID. | [required]
**name** | **str** | Access item's name. | [required]
**description** | **str** | Access item's description. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | Access item's type. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | Action to perform on the access item. | [required]
**comment** | **str** | Comment from the identity requesting access. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request_pre_approval_requested_items_inner import AccessRequestPreApprovalRequestedItemsInner

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

