# LocalizedMessage

# LocalizedMessage

Localized error message to indicate a failed invocation or error if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Message locale | [required]
**message** | **str** | Message text | [required]
\}

## Example

```python
from sailpoint.triggers.models.localized_message import LocalizedMessage

localized_message = LocalizedMessage(
locale='An error has occurred!',
message='Error has occurred!'
)

```
[[Back to top]](#) 

