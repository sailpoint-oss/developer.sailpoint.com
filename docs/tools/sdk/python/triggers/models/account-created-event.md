# AccountCreatedEvent

# AccountCreatedEvent

Details about the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT_CREATED_V2' ] | The type of event. | [required]
**cause** |  **Enum** [  'AGGREGATION',    'PROVISIONING' ] | The cause of the event. | [required]
\}

## Example

```python
from sailpoint.triggers.models.account_created_event import AccountCreatedEvent

account_created_event = AccountCreatedEvent(
type='ACCOUNT_CREATED_V2',
cause='AGGREGATION'
)

```
[[Back to top]](#) 

