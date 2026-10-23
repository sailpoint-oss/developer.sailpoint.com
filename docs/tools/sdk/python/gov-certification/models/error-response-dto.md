# ErrorResponseDto

# ErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]ErrorMessageDto2**](error-message-dto2) | Generic localized reason for error | [optional] 
**causes** | [**[]ErrorMessageDto2**](error-message-dto2) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.error_response_dto import ErrorResponseDto

error_response_dto = ErrorResponseDto(
detail_code='400.1 Bad Request Content',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.gov_certification.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
causes=[
                    sailpoint.gov_certification.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

