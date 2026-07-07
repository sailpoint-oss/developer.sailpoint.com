---
id: error
title: Error
pagination_label: Error
sidebar_label: Error
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Error', 'Error'] 
slug: /tools/sdk/python/custom-forms/models/error
tags: ['SDK', 'Software Development Kit', 'Error', 'Error']
---

# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | DetailCode is the text of the status code returned | [optional] 
**messages** | [**[]Errormessage**](errormessage) |  | [optional] 
**tracking_id** | **str** | TrackingID is the request tracking unique identifier | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.error import Error

error = Error(
detail_code='Internal Server Error',
messages=[
                    sailpoint.custom_forms.models.error_message_is_the_standard_api_error_response_message_type/.ErrorMessage is the standard API error response message type.(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'This is an error', )
                    ],
tracking_id='9cd03ef80e6a425eb6b11bdbb057cdb4'
)

```
[[Back to top]](#) 

