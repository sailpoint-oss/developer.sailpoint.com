---
id: v2025-approval-reassign-request
title: ApprovalReassignRequest
pagination_label: ApprovalReassignRequest
sidebar_label: ApprovalReassignRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalReassignRequest', 'V2025ApprovalReassignRequest'] 
slug: /tools/sdk/python/v2025/models/approval-reassign-request
tags: ['SDK', 'Software Development Kit', 'ApprovalReassignRequest', 'V2025ApprovalReassignRequest']
---

# ApprovalReassignRequest

Request body for reassigning an approval request to another identity. This results in that identity being added as an authorized approver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment associated with the reassign request. | [optional] 
**reassign_from** | **str** | Identity from which the approval is being reassigned. If left blank, and the approval is currently assigned to the user calling this endpoint, it will use the calling user's identity. If left blank, and the approval is not currently assigned to the user calling this endpoint, you need to be an admin, which would add the reassignTo as a new approver. | [optional] 
**reassign_to** | **str** | Identity to which the approval is being reassigned. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_reassign_request import ApprovalReassignRequest

approval_reassign_request = ApprovalReassignRequest(
comment='comment',
reassign_from='384532516be25f8fdf935ce19e295837',
reassign_to='152354832eb6f8f539fd738592e19ec5'
)

```
[[Back to top]](#) 

