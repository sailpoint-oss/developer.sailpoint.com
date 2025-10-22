---
id: v2025-bulk-cancel-request-dto
title: BulkCancelRequestDTO
pagination_label: BulkCancelRequestDTO
sidebar_label: BulkCancelRequestDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkCancelRequestDTO', 'V2025BulkCancelRequestDTO'] 
slug: /tools/sdk/python/v2025/models/bulk-cancel-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkCancelRequestDTO', 'V2025BulkCancelRequestDTO']
---

# BulkCancelRequestDTO

BulkCancelRequestDTO is the input struct that represents the request body required to facilitate a bulk cancellation action for a set of generic approval requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | Array of Approval IDs to be bulk cancelled | [optional] 
**comment** | **str** | Optional comment to include with the bulk cancellation request | [optional] 
}

## Example

```python
from sailpoint.v2025.models.bulk_cancel_request_dto import BulkCancelRequestDTO

bulk_cancel_request_dto = BulkCancelRequestDTO(
approval_ids=[38453251-6be2-5f8f-df93-5ce19e295837, 38453251-6be2-5f8f-df93-5ce19e295838],
comment='Bulk cancellation by admin'
)

```
[[Back to top]](#) 

