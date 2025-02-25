---
id: v2024-approval-forward-history1
title: ApprovalForwardHistory1
pagination_label: ApprovalForwardHistory1
sidebar_label: ApprovalForwardHistory1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalForwardHistory1', 'V2024ApprovalForwardHistory1'] 
slug: /tools/sdk/python/v2024/models/approval-forward-history1
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory1', 'V2024ApprovalForwardHistory1']
---

# ApprovalForwardHistory1


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
from sailpoint.v2024.models.approval_forward_history1 import ApprovalForwardHistory1

approval_forward_history1 = ApprovalForwardHistory1(
old_approver_name='Frank Mir',
new_approver_name='Al Volta',
comment='Forwarding from Frank to Al',
modified='2019-08-23T18:52:57.398Z',
forwarder_name='William Wilson',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

