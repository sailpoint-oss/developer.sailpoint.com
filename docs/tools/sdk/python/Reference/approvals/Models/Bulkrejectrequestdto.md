---
id: bulkrejectrequestdto
title: Bulkrejectrequestdto
pagination_label: Bulkrejectrequestdto
sidebar_label: Bulkrejectrequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkrejectrequestdto', 'Bulkrejectrequestdto'] 
slug: /tools/sdk/python/approvals/models/bulkrejectrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkrejectrequestdto', 'Bulkrejectrequestdto']
---

# Bulkrejectrequestdto

BulkRejectRequestDTO is the input struct that represents the request body required to facilitate a bulk reject action for a set of generic approval requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | Array of Approval IDs to be bulk rejected | [optional] 
**comment** | **str** | Optional comment to include with the bulk reject request | [optional] 
}

## Example

```python
from sailpoint.approvals.models.bulkrejectrequestdto import Bulkrejectrequestdto

bulkrejectrequestdto = Bulkrejectrequestdto(
approval_ids=["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"],
comment='Bulk reject by admin'
)

```
[[Back to top]](#) 

