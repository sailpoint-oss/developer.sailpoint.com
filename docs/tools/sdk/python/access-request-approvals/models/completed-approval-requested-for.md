# CompletedApprovalRequestedFor

# CompletedApprovalRequestedFor

Identity access was requested for. For machine identity requests, `type` is `MACHINE_IDENTITY` and `id` is the machine identity id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'MACHINE_IDENTITY' ] | Type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.access_request_approvals.models.completed_approval_requested_for import CompletedApprovalRequestedFor

completed_approval_requested_for = CompletedApprovalRequestedFor(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

