# AccessRequestResponse2

# AccessRequestResponse2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requester_id** | **str** | the requester Id | [optional] 
**requester_name** | **str** | the requesterName | [optional] 
**items** | [**[]AccessRequestItemResponse**](access-request-item-response) |  | [optional] 
\}

## Example

```python
from sailpoint.identity_history.models.access_request_response2 import AccessRequestResponse2

access_request_response2 = AccessRequestResponse2(
requester_id='2c91808a77ff216301782327a50f09bf',
requester_name='Bing C',
items=[{"operation":"Add","accessItemType":"role","name":"Role-1","decision":"APPROVED","description":"The role descrition","sourceId":"8a80828f643d484f01643e14202e206f","sourceName":"Source1","approvalInfos":[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]}]
)

```
[[Back to top]](#) 

