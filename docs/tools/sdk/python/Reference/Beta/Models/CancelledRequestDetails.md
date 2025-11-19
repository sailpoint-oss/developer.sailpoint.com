---
id: beta-cancelled-request-details
title: CancelledRequestDetails
pagination_label: CancelledRequestDetails
sidebar_label: CancelledRequestDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CancelledRequestDetails', 'BetaCancelledRequestDetails'] 
slug: /tools/sdk/python/beta/models/cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'CancelledRequestDetails', 'BetaCancelledRequestDetails']
---

# CancelledRequestDetails

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
from sailpoint.beta.models.cancelled_request_details import CancelledRequestDetails

cancelled_request_details = CancelledRequestDetails(
comment='This request must be cancelled.',
owner=sailpoint.beta.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

