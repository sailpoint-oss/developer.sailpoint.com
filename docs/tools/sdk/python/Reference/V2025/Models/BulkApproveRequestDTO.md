---
id: v2025-bulk-approve-request-dto
title: BulkApproveRequestDTO
pagination_label: BulkApproveRequestDTO
sidebar_label: BulkApproveRequestDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkApproveRequestDTO', 'V2025BulkApproveRequestDTO'] 
slug: /tools/sdk/python/v2025/models/bulk-approve-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkApproveRequestDTO', 'V2025BulkApproveRequestDTO']
---

# BulkApproveRequestDTO

BulkApproveRequestDTO is the input struct that represents the request body required to facilitate a bulk approval action for a set of generic approval requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | Array of Approval IDs to be bulk approved | [optional] 
**comment** | **str** | Optional comment to include with the bulk approval request | [optional] 
**additional_attributes** | **map[string]object** | Additional attributes to include with the bulk approval request | [optional] 
}

## Example

```python
from sailpoint.v2025.models.bulk_approve_request_dto import BulkApproveRequestDTO

bulk_approve_request_dto = BulkApproveRequestDTO(
approval_ids=[38453251-6be2-5f8f-df93-5ce19e295837, 38453251-6be2-5f8f-df93-5ce19e295838],
comment='Bulk approved by admin for monthly review',
additional_attributes={source=automation, urgency=high}
)

```
[[Back to top]](#) 

