---
id: formerror
title: Formerror
pagination_label: Formerror
sidebar_label: Formerror
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formerror', 'Formerror'] 
slug: /tools/sdk/python/custom-forms/models/formerror
tags: ['SDK', 'Software Development Kit', 'Formerror', 'Formerror']
---

# Formerror


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key is the technical key | [optional] 
**messages** | [**[]Errormessage**](errormessage) | Messages is a list of web.ErrorMessage items | [optional] 
**value** | **object** | Value is the value associated with a Key | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formerror import Formerror

formerror = Formerror(
key='department',
messages=[
                    sailpoint.custom_forms.models.error_message_is_the_standard_api_error_response_message_type/.ErrorMessage is the standard API error response message type.(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'This is an error', )
                    ],
value=Engineering
)

```
[[Back to top]](#) 

