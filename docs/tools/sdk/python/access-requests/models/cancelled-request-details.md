# CancelledRequestDetails

# CancelledRequestDetails

Provides additional details for a request that has been cancelled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment made by the owner when cancelling the associated request. | [optional] 
**owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**modified** | **datetime** | Date comment was added by the owner when cancelling the associated request. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.cancelled_request_details import CancelledRequestDetails

cancelled_request_details = CancelledRequestDetails(
comment='This request must be cancelled.',
owner=sailpoint.access_requests.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
modified='2019-12-20T09:17:12.192Z'
)

```
[[Back to top]](#) 

