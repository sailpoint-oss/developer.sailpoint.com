---
id: accessrequestpreapproval-requested-items-inner
title: AccessrequestpreapprovalRequestedItemsInner
pagination_label: AccessrequestpreapprovalRequestedItemsInner
sidebar_label: AccessrequestpreapprovalRequestedItemsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessrequestpreapprovalRequestedItemsInner', 'AccessrequestpreapprovalRequestedItemsInner'] 
slug: /tools/sdk/python/triggers/models/accessrequestpreapproval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpreapprovalRequestedItemsInner', 'AccessrequestpreapprovalRequestedItemsInner']
---

# AccessrequestpreapprovalRequestedItemsInner


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
from sailpoint.triggers.models.accessrequestpreapproval_requested_items_inner import AccessrequestpreapprovalRequestedItemsInner

accessrequestpreapproval_requested_items_inner = AccessrequestpreapprovalRequestedItemsInner(
id='2c91808b6ef1d43e016efba0ce470904',
name='Engineering Access',
description='Access to engineering database',
type='ACCESS_PROFILE',
operation='Add',
comment='William needs this access to do his job.'
)

```
[[Back to top]](#) 

