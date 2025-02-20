---
id: v2024-error-message-dto1
title: ErrorMessageDto1
pagination_label: ErrorMessageDto1
sidebar_label: ErrorMessageDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ErrorMessageDto1', 'V2024ErrorMessageDto1'] 
slug: /tools/sdk/python/v2024/models/error-message-dto1
tags: ['SDK', 'Software Development Kit', 'ErrorMessageDto1', 'V2024ErrorMessageDto1']
---

# ErrorMessageDto1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**locale_origin** | [**LocaleOrigin**](locale-origin) |  | [optional] 
**text** | **str** | Actual text of the error message in the indicated locale. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.error_message_dto1 import ErrorMessageDto1

error_message_dto1 = ErrorMessageDto1(
locale='en-US',
locale_origin='DEFAULT',
text='The request was syntactically correct but its content is semantically invalid.'
)

```
[[Back to top]](#) 

