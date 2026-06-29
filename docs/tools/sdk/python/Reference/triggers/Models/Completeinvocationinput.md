---
id: completeinvocationinput
title: Completeinvocationinput
pagination_label: Completeinvocationinput
sidebar_label: Completeinvocationinput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Completeinvocationinput', 'Completeinvocationinput'] 
slug: /tools/sdk/python/triggers/models/completeinvocationinput
tags: ['SDK', 'Software Development Kit', 'Completeinvocationinput', 'Completeinvocationinput']
---

# Completeinvocationinput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_error** | [**Localizedmessage**](localizedmessage) |  | [optional] 
**output** | **object** | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.completeinvocationinput import Completeinvocationinput

completeinvocationinput = Completeinvocationinput(
localized_error=sailpoint.triggers.models.localized_message.Localized Message(
                    locale = 'An error has occurred!', 
                    message = 'Error has occurred!', ),
output={"approved":false}
)

```
[[Back to top]](#) 

