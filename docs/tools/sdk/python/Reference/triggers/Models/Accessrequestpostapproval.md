---
id: accessrequestpostapproval
title: Accessrequestpostapproval
pagination_label: Accessrequestpostapproval
sidebar_label: Accessrequestpostapproval
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestpostapproval', 'Accessrequestpostapproval'] 
slug: /tools/sdk/python/triggers/models/accessrequestpostapproval
tags: ['SDK', 'Software Development Kit', 'Accessrequestpostapproval', 'Accessrequestpostapproval']
---

# Accessrequestpostapproval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | The unique ID of the access request. | [required]
**requested_for** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**requested_items_status** | [**[]AccessrequestpostapprovalRequestedItemsStatusInner**](accessrequestpostapproval-requested-items-status-inner) | Details on the outcome of each access item. | [required]
**requested_by** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestpostapproval import Accessrequestpostapproval

accessrequestpostapproval = Accessrequestpostapproval(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.triggers.models.accessitemrequestedfordto.accessitemrequestedfordto(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items_status=[
                    sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner.accessrequestpostapproval_requestedItemsStatus_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = 'ACCESS_PROFILE', 
                        operation = 'Add', 
                        comment = 'William needs this access to do his job.', 
                        client_metadata = {"applicationName":"My application"}, 
                        approval_info = [
                            sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner(
                                approval_comment = 'This access looks good.  Approved.', 
                                approval_decision = 'APPROVED', 
                                approver_name = 'Stephen.Austin', 
                                approver = sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner_approver.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                                    type = 'IDENTITY', ), )
                            ], )
                    ],
requested_by=sailpoint.triggers.models.accessitemrequesterdto.accessitemrequesterdto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

