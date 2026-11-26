# ApprovalCancelRequest

# ApprovalCancelRequest

Request body for cancelling a single approval request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Required comment associated with the cancel request. | [required]
\}

## Example

```python
from sailpoint.approvals.models.approval_cancel_request import ApprovalCancelRequest

approval_cancel_request = ApprovalCancelRequest(
comment='Cancelled by administrator'
)

```
[[Back to top]](#) 

