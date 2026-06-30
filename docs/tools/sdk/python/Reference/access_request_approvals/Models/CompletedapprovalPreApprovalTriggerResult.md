---
id: completedapproval-pre-approval-trigger-result
title: CompletedapprovalPreApprovalTriggerResult
pagination_label: CompletedapprovalPreApprovalTriggerResult
sidebar_label: CompletedapprovalPreApprovalTriggerResult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompletedapprovalPreApprovalTriggerResult', 'CompletedapprovalPreApprovalTriggerResult'] 
slug: /tools/sdk/python/access-request-approvals/models/completedapproval-pre-approval-trigger-result
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalPreApprovalTriggerResult', 'CompletedapprovalPreApprovalTriggerResult']
---

# CompletedapprovalPreApprovalTriggerResult

If the access request submitted event trigger is configured and this access request was intercepted by it, then this is the result of the trigger's decision to either approve or deny the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment from the trigger | [optional] 
**decision** | [**Completedapprovalstate**](completedapprovalstate) |  | [optional] 
**reviewer** | **str** | The name of the approver | [optional] 
**var_date** | **datetime** | The date and time the trigger decided on the request | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.completedapproval_pre_approval_trigger_result import CompletedapprovalPreApprovalTriggerResult

completedapproval_pre_approval_trigger_result = CompletedapprovalPreApprovalTriggerResult(
comment='This request was autoapproved by our automated ETS subscriber',
decision='APPROVED',
reviewer='Automated AR Approval',
var_date='2022-06-07T19:18:40.748Z'
)

```
[[Back to top]](#) 

