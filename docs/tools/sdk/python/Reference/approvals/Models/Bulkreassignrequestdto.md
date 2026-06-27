---
id: bulkreassignrequestdto
title: Bulkreassignrequestdto
pagination_label: Bulkreassignrequestdto
sidebar_label: Bulkreassignrequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkreassignrequestdto', 'Bulkreassignrequestdto'] 
slug: /tools/sdk/python/approvals/models/bulkreassignrequestdto
tags: ['SDK', 'Software Development Kit', 'Bulkreassignrequestdto', 'Bulkreassignrequestdto']
---

# Bulkreassignrequestdto

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
from sailpoint.approvals.models.bulkreassignrequestdto import Bulkreassignrequestdto

bulkreassignrequestdto = Bulkreassignrequestdto(
approval_ids=["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"],
comment='Bulk reassignment by admin',
reassign_from='12353251-6be2-5f8f-df93-5ce19b6e5837',
reassign_to='32454251-6ce2-5d8f-df93-5ce19e295238'
)

```
[[Back to top]](#) 

