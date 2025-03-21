---
id: beta-access-request-post-approval
title: AccessRequestPostApproval
pagination_label: AccessRequestPostApproval
sidebar_label: AccessRequestPostApproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPostApproval', 'BetaAccessRequestPostApproval'] 
slug: /tools/sdk/python/beta/models/access-request-post-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApproval', 'BetaAccessRequestPostApproval']
---

# AccessRequestPostApproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | Access request's unique ID. | [required]
**requested_for** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities whom access was requested for. | [required]
**requested_items_status** | [**[]AccessRequestPostApprovalRequestedItemsStatusInner**](access-request-post-approval-requested-items-status-inner) | Details about the outcome of each requested access item. | [required]
**requested_by** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_post_approval import AccessRequestPostApproval

access_request_post_approval = AccessRequestPostApproval(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.beta.models.access_item_requested_for_dto_1.AccessItemRequestedForDto_1(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items_status=[
                    sailpoint.beta.models.access_request_post_approval_requested_items_status_inner.AccessRequestPostApproval_requestedItemsStatus_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = ACCESS_PROFILE, 
                        operation = Add, 
                        comment = 'William needs this access to do his job.', 
                        client_metadata = {applicationName=My application}, 
                        approval_info = [
                            sailpoint.beta.models.access_request_post_approval_requested_items_status_inner_approval_info_inner.AccessRequestPostApproval_requestedItemsStatus_inner_approvalInfo_inner(
                                approval_comment = 'This access looks good. Approved.', 
                                approval_decision = APPROVED, 
                                approver_name = 'Stephen.Austin', 
                                approver = null, )
                            ], )
                    ],
requested_by=sailpoint.beta.models.access_item_requester_dto_1.AccessItemRequesterDto_1(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

