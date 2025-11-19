---
id: v2025-bulk-reassign-request-dto
title: BulkReassignRequestDTO
pagination_label: BulkReassignRequestDTO
sidebar_label: BulkReassignRequestDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkReassignRequestDTO', 'V2025BulkReassignRequestDTO'] 
slug: /tools/sdk/python/v2025/models/bulk-reassign-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkReassignRequestDTO', 'V2025BulkReassignRequestDTO']
---

# BulkReassignRequestDTO

BulkReassignRequestDTO is the input struct that represents the request body required to facilitate a bulk reassignment action for a set of generic approval requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | Array of Approval IDs to be bulk reassigned | [optional] 
**comment** | **str** | Optional comment to include with the bulk reassignment request | [optional] 
**reassign_from** | **str** | Identity ID from which the approval requests are being reassigned | [optional] 
**reassign_to** | **str** | ReassignTo signifies the Identity ID that the approval request is being reassigned to | [optional] 
}

## Example

```python
from sailpoint.v2025.models.bulk_reassign_request_dto import BulkReassignRequestDTO

bulk_reassign_request_dto = BulkReassignRequestDTO(
approval_ids=[38453251-6be2-5f8f-df93-5ce19e295837, 38453251-6be2-5f8f-df93-5ce19e295838],
comment='Bulk reassignment by admin',
reassign_from='12353251-6be2-5f8f-df93-5ce19b6e5837',
reassign_to='32454251-6ce2-5d8f-df93-5ce19e295238'
)

```
[[Back to top]](#) 

