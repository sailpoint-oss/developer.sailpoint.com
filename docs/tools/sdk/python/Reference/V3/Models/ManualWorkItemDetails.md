---
id: manual-work-item-details
title: ManualWorkItemDetails
pagination_label: ManualWorkItemDetails
sidebar_label: ManualWorkItemDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManualWorkItemDetails', 'ManualWorkItemDetails'] 
slug: /tools/sdk/python/v3/models/manual-work-item-details
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails', 'ManualWorkItemDetails']
---

# ManualWorkItemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to False]
**original_owner** | [**ManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**current_owner** | [**ManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**modified** | **datetime** | Time at which item was modified. | [optional] 
**status** | [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**forward_history** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
}

## Example

```python
from sailpoint.v3.models.manual_work_item_details import ManualWorkItemDetails

manual_work_item_details = ManualWorkItemDetails(
forwarded=True,
original_owner=sailpoint.v3.models.manual_work_item_details_original_owner.ManualWorkItemDetails_originalOwner(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
current_owner=sailpoint.v3.models.manual_work_item_details_current_owner.ManualWorkItemDetails_currentOwner(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', ),
modified='2019-08-23T18:52:57.398Z',
status='PENDING',
forward_history=[
                    sailpoint.v3.models.approval_forward_history.Approval Forward History(
                        old_approver_name = 'Frank Mir', 
                        new_approver_name = 'Al Volta', 
                        comment = 'Forwarding from Frank to Al', 
                        modified = '2019-08-23T18:52:57.398Z', 
                        forwarder_name = 'William Wilson', 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ]
)

```
[[Back to top]](#) 

