# IntelIdentityNotFoundBody

# IntelIdentityNotFoundBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** |  **Enum** [  'IDC_IDENTITY_NOT_FOUND' ] | Constant detail code indicating that no identity matched the supplied filter. | [required]
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intel_identity_not_found_body import IntelIdentityNotFoundBody

intel_identity_not_found_body = IntelIdentityNotFoundBody(
detail_code='IDC_IDENTITY_NOT_FOUND',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.intelligence.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
causes=[
                    sailpoint.intelligence.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

