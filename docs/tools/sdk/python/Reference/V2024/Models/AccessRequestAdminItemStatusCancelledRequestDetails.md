---
id: v2024-access-request-admin-item-status-cancelled-request-details
title: AccessRequestAdminItemStatusCancelledRequestDetails
pagination_label: AccessRequestAdminItemStatusCancelledRequestDetails
sidebar_label: AccessRequestAdminItemStatusCancelledRequestDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestAdminItemStatusCancelledRequestDetails', 'V2024AccessRequestAdminItemStatusCancelledRequestDetails'] 
slug: /tools/sdk/python/v2024/models/access-request-admin-item-status-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatusCancelledRequestDetails', 'V2024AccessRequestAdminItemStatusCancelledRequestDetails']
---

# AccessRequestAdminItemStatusCancelledRequestDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment made by the owner when cancelling the associated request. | [optional] 
**owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**modified** | **datetime** | Date comment was added by the owner when cancelling the associated request. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_admin_item_status_cancelled_request_details import AccessRequestAdminItemStatusCancelledRequestDetails

access_request_admin_item_status_cancelled_request_details = AccessRequestAdminItemStatusCancelledRequestDetails(
comment='This request must be cancelled.',
owner=sailpoint.v2024.models.owner_dto.OwnerDto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

