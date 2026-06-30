---
id: requesteditemstatus-cancelled-request-details
title: RequesteditemstatusCancelledRequestDetails
pagination_label: RequesteditemstatusCancelledRequestDetails
sidebar_label: RequesteditemstatusCancelledRequestDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequesteditemstatusCancelledRequestDetails', 'RequesteditemstatusCancelledRequestDetails'] 
slug: /tools/sdk/python/access-requests/models/requesteditemstatus-cancelled-request-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusCancelledRequestDetails', 'RequesteditemstatusCancelledRequestDetails']
---

# RequesteditemstatusCancelledRequestDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment made by the owner when cancelling the associated request. | [optional] 
**owner** | [**Ownerdto**](ownerdto) |  | [optional] 
**modified** | **datetime** | Date comment was added by the owner when cancelling the associated request. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requesteditemstatus_cancelled_request_details import RequesteditemstatusCancelledRequestDetails

requesteditemstatus_cancelled_request_details = RequesteditemstatusCancelledRequestDetails(
comment='This request must be cancelled.',
owner=sailpoint.access_requests.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

