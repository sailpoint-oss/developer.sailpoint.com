---
id: beta-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestDynamicApprover', 'BetaAccessRequestDynamicApprover'] 
slug: /tools/sdk/python/beta/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'BetaAccessRequestDynamicApprover']
---

# AccessRequestDynamicApprover


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | Unique ID of the access request object. You can use this ID with the [Access Request Status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the request's status. | [required]
**requested_for** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities access was requested for. | [required]
**requested_items** | [**[]AccessRequestDynamicApproverRequestedItemsInner**](access-request-dynamic-approver-requested-items-inner) | Requested access items. | [required]
**requested_by** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_dynamic_approver import AccessRequestDynamicApprover

access_request_dynamic_approver = AccessRequestDynamicApprover(
access_request_id='4b4d982dddff4267ab12f0f1e72b5a6d',
requested_for=[
                    sailpoint.beta.models.access_item_requested_for_dto_1.AccessItemRequestedForDto_1(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.beta.models.access_request_dynamic_approver_requested_items_inner.AccessRequestDynamicApprover_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Engineering Access', 
                        type = ACCESS_PROFILE, 
                        operation = Add, 
                        comment = 'William needs this access for his day to day job activities.', )
                    ],
requested_by=sailpoint.beta.models.access_item_requester_dto_1.AccessItemRequesterDto_1(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

