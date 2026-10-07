# Intelidentityambiguousbody

# Intelidentityambiguousbody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** |  **Enum** [  'IDC_IDENTITY_AMBIGUOUS' ] | Constant detail code indicating that more than one identity matched the filter. | [required]
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
**candidates** | [**[]Intelidentityambiguouscandidate**](intelidentityambiguouscandidate) | Identities that matched the ambiguous filter expression. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.intelidentityambiguousbody import Intelidentityambiguousbody

intelidentityambiguousbody = Intelidentityambiguousbody(
detail_code='IDC_IDENTITY_AMBIGUOUS',
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
                    ],
candidates=[
                    sailpoint.intelligence.models.intelidentityambiguouscandidate.Intelidentityambiguouscandidate(
                        id = 'ef38f94347e94562b5bb8424a56397d8', 
                        display_name = 'Jane Example', )
                    ]
)

```
[[Back to top]](#) 

