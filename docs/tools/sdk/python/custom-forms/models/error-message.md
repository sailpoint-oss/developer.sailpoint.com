# ErrorMessage

# ErrorMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Locale is the current Locale | [optional] 
**locale_origin** | **str** | LocaleOrigin holds possible values of how the locale was selected | [optional] 
**text** | **str** | Text is the actual text of the error message | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.error_message import ErrorMessage

error_message = ErrorMessage(
locale='en-US',
locale_origin='DEFAULT',
text='This is an error'
)

```
[[Back to top]](#) 

