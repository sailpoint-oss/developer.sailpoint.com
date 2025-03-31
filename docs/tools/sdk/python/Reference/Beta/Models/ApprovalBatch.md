---
id: beta-approval-batch
title: ApprovalBatch
pagination_label: ApprovalBatch
sidebar_label: ApprovalBatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalBatch', 'BetaApprovalBatch'] 
slug: /tools/sdk/python/beta/models/approval-batch
tags: ['SDK', 'Software Development Kit', 'ApprovalBatch', 'BetaApprovalBatch']
---

# ApprovalBatch

Batch properties if an approval is sent via batching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **str** | ID of the batch | [optional] 
**batch_size** | **int** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 
}

## Example

```python
from sailpoint.beta.models.approval_batch import ApprovalBatch

approval_batch = ApprovalBatch(
batch_id='38453251-6be2-5f8f-df93-5ce19e295837',
batch_size=100
)

```
[[Back to top]](#) 

