---
id: v2024-manual-work-item-details1
title: ManualWorkItemDetails1
pagination_label: ManualWorkItemDetails1
sidebar_label: ManualWorkItemDetails1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManualWorkItemDetails1', 'V2024ManualWorkItemDetails1'] 
slug: /tools/sdk/python/v2024/models/manual-work-item-details1
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetails1', 'V2024ManualWorkItemDetails1']
---

# ManualWorkItemDetails1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to False]
**original_owner** | [**ManualWorkItemDetailsOriginalOwner**](manual-work-item-details-original-owner) |  | [optional] 
**current_owner** | [**ManualWorkItemDetailsCurrentOwner**](manual-work-item-details-current-owner) |  | [optional] 
**modified** | **datetime** | Time at which item was modified. | [optional] 
**status** | [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**forward_history** | [**[]ApprovalForwardHistory1**](approval-forward-history1) | The history of approval forward action. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.manual_work_item_details1 import ManualWorkItemDetails1

manual_work_item_details1 = ManualWorkItemDetails1(
forwarded=True,
original_owner=sailpoint.v2024.models.manual_work_item_details_original_owner.ManualWorkItemDetails_originalOwner(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
current_owner=sailpoint.v2024.models.manual_work_item_details_current_owner.ManualWorkItemDetails_currentOwner(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', ),
modified='2019-08-23T18:52:57.398Z',
status='PENDING',
forward_history=[
                    sailpoint.v2024.models.approval_forward_history_1.ApprovalForwardHistory_1(
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

