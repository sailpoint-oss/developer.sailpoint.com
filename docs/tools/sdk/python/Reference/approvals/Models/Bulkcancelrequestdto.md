---
id: bulkcancelrequestdto
title: Bulkcancelrequestdto
pagination_label: Bulkcancelrequestdto
sidebar_label: Bulkcancelrequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkcancelrequestdto', 'Bulkcancelrequestdto'] 
slug: /tools/sdk/python/approvals/models/bulkcancelrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkcancelrequestdto', 'Bulkcancelrequestdto']
---

# Bulkcancelrequestdto

BulkCancelRequestDTO is the input struct that represents the request body required to facilitate a bulk cancellation action for a set of generic approval requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | Array of Approval IDs to be bulk cancelled | [optional] 
**comment** | **str** | Optional comment to include with the bulk cancellation request | [optional] 
}

## Example

```python
from sailpoint.approvals.models.bulkcancelrequestdto import Bulkcancelrequestdto

bulkcancelrequestdto = Bulkcancelrequestdto(
approval_ids=["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"],
comment='Bulk cancellation by admin'
)

```
[[Back to top]](#) 

