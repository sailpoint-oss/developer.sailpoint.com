---
id: approvalcancelrequest
title: Approvalcancelrequest
pagination_label: Approvalcancelrequest
sidebar_label: Approvalcancelrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalcancelrequest', 'Approvalcancelrequest'] 
slug: /tools/sdk/python/approvals/models/approvalcancelrequest
tags: ['SDK', 'Software Development Kit', 'Approvalcancelrequest', 'Approvalcancelrequest']
---

# Approvalcancelrequest

Request body for cancelling a single approval request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Optional comment associated with the cancel request. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalcancelrequest import Approvalcancelrequest

approvalcancelrequest = Approvalcancelrequest(
comment='Cancelled by administrator'
)

```
[[Back to top]](#) 

