---
id: v2025-complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompleteInvocationInput', 'V2025CompleteInvocationInput'] 
slug: /tools/sdk/python/v2025/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput', 'V2025CompleteInvocationInput']
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
from sailpoint.v2025.models.complete_invocation_input import CompleteInvocationInput

complete_invocation_input = CompleteInvocationInput(
localized_error=sailpoint.v2025.models.localized_message.LocalizedMessage(
                    locale = 'An error has occurred!', 
                    message = 'Error has occurred!', ),
output={approved=false}
)

```
[[Back to top]](#) 

