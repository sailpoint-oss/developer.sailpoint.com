---
id: v2025-error-message-dto
title: ErrorMessageDto
pagination_label: ErrorMessageDto
sidebar_label: ErrorMessageDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ErrorMessageDto', 'V2025ErrorMessageDto'] 
slug: /tools/sdk/python/v2025/models/error-message-dto
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto', 'V2025ErrorMessageDto']
---

# ErrorMessageDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**locale_origin** | [**LocaleOrigin**](locale-origin) |  | [optional] 
**text** | **str** | Actual text of the error message in the indicated locale. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.error_message_dto import ErrorMessageDto

error_message_dto = ErrorMessageDto(
locale='en-US',
locale_origin='DEFAULT',
text='The request was syntactically correct but its content is semantically invalid.'
)

```
[[Back to top]](#) 

