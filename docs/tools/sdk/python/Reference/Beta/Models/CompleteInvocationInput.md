---
id: beta-complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompleteInvocationInput', 'BetaCompleteInvocationInput'] 
slug: /tools/sdk/python/beta/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput', 'BetaCompleteInvocationInput']
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
from sailpoint.beta.models.complete_invocation_input import CompleteInvocationInput

complete_invocation_input = CompleteInvocationInput(
localized_error=sailpoint.beta.models.localized_message.LocalizedMessage(
                    locale = 'An error has occurred!', 
                    message = 'Error has occurred!', ),
output={approved=false}
)

```
[[Back to top]](#) 

