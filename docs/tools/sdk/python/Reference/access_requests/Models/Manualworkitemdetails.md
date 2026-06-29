---
id: manualworkitemdetails
title: Manualworkitemdetails
pagination_label: Manualworkitemdetails
sidebar_label: Manualworkitemdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Manualworkitemdetails', 'Manualworkitemdetails'] 
slug: /tools/sdk/python/access-requests/models/manualworkitemdetails
tags: ['SDK', 'Software Development Kit', 'Manualworkitemdetails', 'Manualworkitemdetails']
---

# Manualworkitemdetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **bool** | True if the request for this item was forwarded from one owner to another. | [optional] [default to False]
**original_owner** | [**ManualworkitemdetailsOriginalOwner**](manualworkitemdetails-original-owner) |  | [optional] 
**current_owner** | [**ManualworkitemdetailsCurrentOwner**](manualworkitemdetails-current-owner) |  | [optional] 
**modified** | **datetime** | Time at which item was modified. | [optional] 
**status** | [**Manualworkitemstate**](manualworkitemstate) |  | [optional] 
**forward_history** | [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.manualworkitemdetails import Manualworkitemdetails

manualworkitemdetails = Manualworkitemdetails(
forwarded=True,
original_owner=sailpoint.access_requests.models.manualworkitemdetails_original_owner.manualworkitemdetails_originalOwner(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
current_owner=sailpoint.access_requests.models.manualworkitemdetails_current_owner.manualworkitemdetails_currentOwner(
                    type = 'IDENTITY', 
                    id = '2c3780a46faadee4016fb4e018c20652', 
                    name = 'Allen Albertson', ),
modified='2019-08-23T18:52:57.398Z',
status='PENDING',
forward_history=[
                    sailpoint.access_requests.models.approval_forward_history.Approval Forward History(
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

