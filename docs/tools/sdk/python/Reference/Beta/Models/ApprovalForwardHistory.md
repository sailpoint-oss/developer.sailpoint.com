---
id: beta-approval-forward-history
title: ApprovalForwardHistory
pagination_label: ApprovalForwardHistory
sidebar_label: ApprovalForwardHistory
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalForwardHistory', 'BetaApprovalForwardHistory'] 
slug: /tools/sdk/python/beta/models/approval-forward-history
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory', 'BetaApprovalForwardHistory']
---

# ApprovalForwardHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_approver_name** | **str** | Display name of approver from whom the approval was forwarded. | [optional] 
**new_approver_name** | **str** | Display name of approver to whom the approval was forwarded. | [optional] 
**comment** | **str** | Comment made while forwarding. | [optional] 
**modified** | **datetime** | Time at which approval was forwarded. | [optional] 
**forwarder_name** | **str** | Display name of forwarder who forwarded the approval. | [optional] 
**reassignment_type** | [**ReassignmentType**](reassignment-type) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.approval_forward_history import ApprovalForwardHistory

approval_forward_history = ApprovalForwardHistory(
old_approver_name='Frank Mir',
new_approver_name='Al Volta',
comment='Forwarding from Frank to Al',
modified='2019-08-23T18:52:57.398Z',
forwarder_name='William Wilson',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

