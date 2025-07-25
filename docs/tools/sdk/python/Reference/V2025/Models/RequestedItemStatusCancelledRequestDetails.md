---
id: v2025-requested-item-status-cancelled-request-details
title: RequestedItemStatusCancelledRequestDetails
pagination_label: RequestedItemStatusCancelledRequestDetails
sidebar_label: RequestedItemStatusCancelledRequestDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusCancelledRequestDetails', 'V2025RequestedItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/python/v2025/models/requested-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusCancelledRequestDetails', 'V2025RequestedItemStatusCancelledRequestDetails']
---

# RequestedItemStatusCancelledRequestDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment made by the owner when cancelling the associated request. | [optional] 
**owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**modified** | **datetime** | Date comment was added by the owner when cancelling the associated request. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.requested_item_status_cancelled_request_details import RequestedItemStatusCancelledRequestDetails

requested_item_status_cancelled_request_details = RequestedItemStatusCancelledRequestDetails(
comment='This request must be cancelled.',
owner=sailpoint.v2025.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

