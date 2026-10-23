# ApprovalConfigTimeoutConfig

# ApprovalConfigTimeoutConfig

TimeoutConfig contains configurations around when the approval request should expire.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if timeout is enabled. | [optional] [default to False]
**days_until_timeout** | **int** | Number of days until approval request times out. Max value is 90. | [optional] 
**timeout_result** |  **Enum** [  'EXPIRED',    'APPROVED' ] | Result of timeout. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_config_timeout_config import ApprovalConfigTimeoutConfig

approval_config_timeout_config = ApprovalConfigTimeoutConfig(
enabled=True,
days_until_timeout=2,
timeout_result='EXPIRED'
)

```
[[Back to top]](#) 

