# CompleteInvocationInput

# CompleteInvocationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_error** | [**LocalizedMessage**](localized-message) |  | [optional] 
**output** | **object** | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.complete_invocation_input import CompleteInvocationInput

complete_invocation_input = CompleteInvocationInput(
localized_error=sailpoint.triggers.models.localized_message.Localized Message(
                    locale = 'An error has occurred!', 
                    message = 'Error has occurred!', ),
output={"approved":false}
)

```
[[Back to top]](#) 

