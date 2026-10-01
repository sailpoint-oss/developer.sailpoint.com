# AccessRequestDynamicApprover

# AccessRequestDynamicApprover


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1) to get the status of the request.  | [required]
**requested_for** | [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | [required]
**requested_items** | [**[]AccessRequestDynamicApproverRequestedItemsInner**](access-request-dynamic-approver-requested-items-inner) | The access items that are being requested. | [required]
**requested_by** | [**AccessItemRequesterDto**](access-item-requester-dto) |  | [required]
\}

## Example

```python
from sailpoint.triggers.models.access_request_dynamic_approver import AccessRequestDynamicApprover

access_request_dynamic_approver = AccessRequestDynamicApprover(
access_request_id='4b4d982dddff4267ab12f0f1e72b5a6d',
requested_for=[
                    sailpoint.triggers.models.access_item_requested_for_dto.AccessItemRequestedForDto(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.triggers.models.access_request_dynamic_approver_requested_items_inner.AccessRequestDynamicApprover_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Engineering Access', 
                        type = 'ACCESS_PROFILE', 
                        operation = 'Add', 
                        comment = 'William needs this access for his day to day job activities.', 
                        form = null, )
                    ],
requested_by=sailpoint.triggers.models.access_item_requester_dto.AccessItemRequesterDto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

