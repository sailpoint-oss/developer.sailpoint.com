---
id: bulkapproverequestdto
title: Bulkapproverequestdto
pagination_label: Bulkapproverequestdto
sidebar_label: Bulkapproverequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkapproverequestdto', 'Bulkapproverequestdto'] 
slug: /tools/sdk/python/approvals/models/bulkapproverequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkapproverequestdto', 'Bulkapproverequestdto']
---

# Bulkapproverequestdto

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
from sailpoint.approvals.models.bulkapproverequestdto import Bulkapproverequestdto

bulkapproverequestdto = Bulkapproverequestdto(
approval_ids=["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"],
comment='Bulk approved by admin for monthly review',
additional_attributes={"source":"automation","urgency":"high"}
)

```
[[Back to top]](#) 

