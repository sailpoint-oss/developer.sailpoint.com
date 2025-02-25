---
id: v2024-cancelled-request-details1
title: CancelledRequestDetails1
pagination_label: CancelledRequestDetails1
sidebar_label: CancelledRequestDetails1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CancelledRequestDetails1', 'V2024CancelledRequestDetails1'] 
slug: /tools/sdk/python/v2024/models/cancelled-request-details1
tags: ['SDK', 'Software Development Kit', 'CancelledRequestDetails1', 'V2024CancelledRequestDetails1']
---

# CancelledRequestDetails1

Provides additional details for a request that has been cancelled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment made by the owner when cancelling the associated request. | [optional] 
**owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**modified** | **datetime** | Date comment was added by the owner when cancelling the associated request. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.cancelled_request_details1 import CancelledRequestDetails1

cancelled_request_details1 = CancelledRequestDetails1(
comment='This request must be cancelled.',
owner=sailpoint.v2024.models.owner_dto.OwnerDto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

