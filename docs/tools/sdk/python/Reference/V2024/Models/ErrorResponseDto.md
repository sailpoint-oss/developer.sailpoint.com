---
id: v2024-error-response-dto
title: ErrorResponseDto
pagination_label: ErrorResponseDto
sidebar_label: ErrorResponseDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ErrorResponseDto', 'V2024ErrorResponseDto'] 
slug: /tools/sdk/python/v2024/models/error-response-dto
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto', 'V2024ErrorResponseDto']
---

# ErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**causes** | [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
}

## Example

```python
from sailpoint.v2024.models.error_response_dto import ErrorResponseDto

error_response_dto = ErrorResponseDto(
detail_code='400.1 Bad Request Content',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.v2024.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
causes=[
                    sailpoint.v2024.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

