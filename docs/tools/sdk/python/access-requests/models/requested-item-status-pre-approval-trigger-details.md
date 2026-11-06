# RequestedItemStatusPreApprovalTriggerDetails

# RequestedItemStatusPreApprovalTriggerDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment left for the pre-approval decision | [optional] 
**reviewer** | **str** | The reviewer of the pre-approval decision | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | The decision of the pre-approval trigger | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.requested_item_status_pre_approval_trigger_details import RequestedItemStatusPreApprovalTriggerDetails

requested_item_status_pre_approval_trigger_details = RequestedItemStatusPreApprovalTriggerDetails(
comment='Access is Approved',
reviewer='John Doe',
decision='APPROVED'
)

```
[[Back to top]](#) 

