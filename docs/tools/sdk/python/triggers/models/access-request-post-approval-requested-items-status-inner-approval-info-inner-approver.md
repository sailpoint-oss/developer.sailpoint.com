# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

The identity of the approver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object that is referenced | [required]
**id** | **str** | ID of identity who approved the access item request. | [required]
**name** | **str** | Human-readable display name of identity who approved the access item request. | [required]
\}

## Example

```python
from sailpoint.triggers.models.access_request_post_approval_requested_items_status_inner_approval_info_inner_approver import AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

access_request_post_approval_requested_items_status_inner_approval_info_inner_approver = AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

