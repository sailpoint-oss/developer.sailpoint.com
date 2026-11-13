# ApprovalRejectRequest

# ApprovalRejectRequest

Request body for rejecting an approval request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment associated with the reject request. | [optional] [default to '']
**override_approver_id** | **str** | Optional field for ServiceNow Administrators to specify which member of a governance group to override/reject on behalf of. | [optional] [default to '']
\}

## Example

```python
from sailpoint.approvals.models.approval_reject_request import ApprovalRejectRequest

approval_reject_request = ApprovalRejectRequest(
comment='',
override_approver_id=''
)

```
[[Back to top]](#) 

