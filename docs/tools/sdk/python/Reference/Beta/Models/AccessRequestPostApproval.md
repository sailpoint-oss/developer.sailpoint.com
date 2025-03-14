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
**access_request_id** | **str** | The unique ID of the access request. | [required]
**requested_for** | [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | [required]
**requested_items_status** | [**[]AccessRequestPostApprovalRequestedItemsStatusInner**](access-request-post-approval-requested-items-status-inner) | Details on the outcome of each access item. | [required]
**requested_by** | [**AccessItemRequesterDto**](access-item-requester-dto) |  | [required]
}

## Example

```python
from sailpoint.beta.models.access_request_post_approval import AccessRequestPostApproval

access_request_post_approval = AccessRequestPostApproval(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.beta.models.access_item_requested_for_dto.AccessItemRequestedForDto(
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
                                approval_comment = 'This access looks good.  Approved.', 
                                approval_decision = APPROVED, 
                                approver_name = 'Stephen.Austin', 
                                approver = sailpoint.beta.models.access_request_post_approval_requested_items_status_inner_approval_info_inner_approver.AccessRequestPostApproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                                    type = IDENTITY, ), )
                            ], )
                    ],
requested_by=sailpoint.beta.models.access_item_requester_dto.AccessItemRequesterDto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

