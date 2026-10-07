# LoadUncorrelatedAccountsTaskTaskMessagesInner

# LoadUncorrelatedAccountsTaskTaskMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'INFO',    'WARN',    'ERROR' ] | Type of the message. | [optional] 
**error** | **bool** | Flag whether message is an error. | [optional] [default to False]
**warning** | **bool** | Flag whether message is a warning. | [optional] [default to False]
**key** | **str** | Message string identifier. | [optional] 
**localized_text** | **str** | Message context with the locale based language. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.load_uncorrelated_accounts_task_task_messages_inner import LoadUncorrelatedAccountsTaskTaskMessagesInner

load_uncorrelated_accounts_task_task_messages_inner = LoadUncorrelatedAccountsTaskTaskMessagesInner(
type='WARN',
error=False,
warning=True,
key='This correlation failed because the currently running correlation must complete before the next one can start.',
localized_text='This correlation failed because the currently running correlation must complete before the next one can start.'
)

```
[[Back to top]](#) 

