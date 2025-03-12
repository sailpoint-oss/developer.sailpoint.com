---
id: v2024-access-request-pre-approval
title: AccessRequestPreApproval
pagination_label: AccessRequestPreApproval
sidebar_label: AccessRequestPreApproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPreApproval', 'V2024AccessRequestPreApproval'] 
slug: /tools/sdk/python/v2024/models/access-request-pre-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval', 'V2024AccessRequestPreApproval']
---

# AccessRequestPreApproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | The unique ID of the access request. | [required]
**requested_for** | [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | [required]
**requested_items** | [**[]AccessRequestPreApprovalRequestedItemsInner**](access-request-pre-approval-requested-items-inner) | Details of the access items being requested. | [required]
**requested_by** | [**AccessItemRequesterDto**](access-item-requester-dto) |  | [required]
}

## Example

```python
from sailpoint.v2024.models.access_request_pre_approval import AccessRequestPreApproval

access_request_pre_approval = AccessRequestPreApproval(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.v2024.models.access_item_requested_for_dto.AccessItemRequestedForDto(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.v2024.models.access_request_pre_approval_requested_items_inner.AccessRequestPreApproval_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = ACCESS_PROFILE, 
                        operation = Add, 
                        comment = 'William needs this access to do his job.', )
                    ],
requested_by=sailpoint.v2024.models.access_item_requester_dto.AccessItemRequesterDto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

