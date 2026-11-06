# AccountStatusChangedStatusChange

# AccountStatusChangedStatusChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the previous status of the account | [optional] 
**new_status** |  **Enum** [  'enabled',    'disabled',    'locked' ] | the new status of the account | [optional] 
\}

## Example

```python
from sailpoint.identity_history.models.account_status_changed_status_change import AccountStatusChangedStatusChange

account_status_changed_status_change = AccountStatusChangedStatusChange(
previous_status='enabled',
new_status='disabled'
)

```
[[Back to top]](#) 

