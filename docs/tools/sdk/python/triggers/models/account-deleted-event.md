# AccountDeletedEvent

# AccountDeletedEvent

Details about the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_DELETED_V2' ] | The type of event. | [required]
**cause** |  **Enum** [  'AGGREGATION',    'PROVISIONING' ] | The cause of the event. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_deleted_event import AccountDeletedEvent

account_deleted_event = AccountDeletedEvent(
type='ACCOUNT_DELETED_V2',
cause='AGGREGATION'
)

```
[[Back to top]](#) 

