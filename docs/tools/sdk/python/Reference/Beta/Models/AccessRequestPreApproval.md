---
id: beta-access-request-pre-approval
title: AccessRequestPreApproval
pagination_label: AccessRequestPreApproval
sidebar_label: AccessRequestPreApproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPreApproval', 'BetaAccessRequestPreApproval'] 
slug: /tools/sdk/python/beta/models/access-request-pre-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval', 'BetaAccessRequestPreApproval']
---

# AccessRequestPreApproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | Access request's unique ID. | [required]
**requested_for** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities whom access was requested for. | [required]
**requested_items** | [**[]AccessRequestPreApprovalRequestedItemsInner**](access-request-pre-approval-requested-items-inner) | Details about each requested access item. | [required]
**requested_by** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_pre_approval import AccessRequestPreApproval

access_request_pre_approval = AccessRequestPreApproval(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.beta.models.access_item_requested_for_dto_1.AccessItemRequestedForDto_1(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.beta.models.access_request_pre_approval_requested_items_inner.AccessRequestPreApproval_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = ACCESS_PROFILE, 
                        operation = Add, 
                        comment = 'William needs this access to do his job.', )
                    ],
requested_by=sailpoint.beta.models.access_item_requester_dto_1.AccessItemRequesterDto_1(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

