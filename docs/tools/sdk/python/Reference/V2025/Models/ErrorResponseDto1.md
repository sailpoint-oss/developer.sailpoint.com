---
id: v2025-error-response-dto1
title: ErrorResponseDto1
pagination_label: ErrorResponseDto1
sidebar_label: ErrorResponseDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ErrorResponseDto1', 'V2025ErrorResponseDto1'] 
slug: /tools/sdk/python/v2025/models/error-response-dto1
tags: ['SDK', 'Software Development Kit', 'ErrorResponseDto1', 'V2025ErrorResponseDto1']
---

# ErrorResponseDto1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]ErrorMessageDto1**](error-message-dto1) | Generic localized reason for error | [optional] 
**causes** | [**[]ErrorMessageDto1**](error-message-dto1) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 
}

## Example

```python
from sailpoint.v2025.models.error_response_dto1 import ErrorResponseDto1

error_response_dto1 = ErrorResponseDto1(
detail_code='400.1 Bad Request Content',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.v2025.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ],
causes=[
                    sailpoint.v2025.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

