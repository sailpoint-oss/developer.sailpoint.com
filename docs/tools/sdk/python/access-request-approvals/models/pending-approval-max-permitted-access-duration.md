# PendingApprovalMaxPermittedAccessDuration

# PendingApprovalMaxPermittedAccessDuration

The maximum duration for which the access is permitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **int** | The numeric value of the duration. | [optional] 
**time_unit** |  **Enum** [  'HOURS',    'DAYS',    'WEEKS',    'MONTHS' ] | The time unit for the duration. | [optional] 
\}

## Example

```python
from sailpoint.access_request_approvals.models.pending_approval_max_permitted_access_duration import PendingApprovalMaxPermittedAccessDuration

pending_approval_max_permitted_access_duration = PendingApprovalMaxPermittedAccessDuration(
value=5,
time_unit='DAYS'
)

```
[[Back to top]](#) 

