# AccountUpdatedEvent

# AccountUpdatedEvent

Details about the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_UPDATED_V2' ] | The type of event. | [required]
**cause** |  **Enum** [  'AGGREGATION',    'PROVISIONING',    'PASSWORD_CHANGE' ] | The cause of the event. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_updated_event import AccountUpdatedEvent

account_updated_event = AccountUpdatedEvent(
type='ACCOUNT_UPDATED_V2',
cause='AGGREGATION'
)

```
[[Back to top]](#) 

