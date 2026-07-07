---
id: accessrequestpostapproval-requested-items-status-inner
title: AccessrequestpostapprovalRequestedItemsStatusInner
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInner
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInner', 'AccessrequestpostapprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/python/triggers/models/accessrequestpostapproval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInner', 'AccessrequestpostapprovalRequestedItemsStatusInner']
---

# AccessrequestpostapprovalRequestedItemsStatusInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the access item being requested. | [required]
**name** | **str** | The human friendly name of the access item. | [required]
**description** | **str** | Detailed description of the access item. | [optional] 
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of access item. | [required]
**operation** |  **Enum** [  'Add',    'Remove' ] | The action to perform on the access item. | [required]
**comment** | **str** | A comment from the identity requesting the access. | [optional] 
**client_metadata** | **map[string]object** | Additional customer defined metadata about the access item. | [optional] 
**approval_info** | [**[]AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner**](accessrequestpostapproval-requested-items-status-inner-approval-info-inner) | A list of one or more approvers for the access request. | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner import AccessrequestpostapprovalRequestedItemsStatusInner

accessrequestpostapproval_requested_items_status_inner = AccessrequestpostapprovalRequestedItemsStatusInner(
id='2c91808b6ef1d43e016efba0ce470904',
name='Engineering Access',
description='Access to engineering database',
type='ACCESS_PROFILE',
operation='Add',
comment='William needs this access to do his job.',
client_metadata={"applicationName":"My application"},
approval_info=[
                    sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner(
                        approval_comment = 'This access looks good.  Approved.', 
                        approval_decision = 'APPROVED', 
                        approver_name = 'Stephen.Austin', 
                        approver = sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner_approver.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                            type = 'IDENTITY', ), )
                    ]
)

```
[[Back to top]](#) 

