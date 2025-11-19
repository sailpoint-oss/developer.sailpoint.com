---
id: v2024-complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompleteInvocationInput', 'V2024CompleteInvocationInput'] 
slug: /tools/sdk/python/v2024/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput', 'V2024CompleteInvocationInput']
---

# CompleteInvocationInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_error** | [**LocalizedMessage**](localized-message) |  | [optional] 
**output** | **object** | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.complete_invocation_input import CompleteInvocationInput

complete_invocation_input = CompleteInvocationInput(
localized_error=sailpoint.v2024.models.localized_message.Localized Message(
                    locale = 'An error has occurred!', 
                    message = 'Error has occurred!', ),
output={approved=false}
)

```
[[Back to top]](#) 

