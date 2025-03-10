---
id: v2024-error
title: Error
pagination_label: Error
sidebar_label: Error
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Error', 'V2024Error'] 
slug: /tools/sdk/python/v2024/models/error
tags: ['SDK', 'Software Development Kit', 'Error', 'V2024Error']
---

# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | DetailCode is the text of the status code returned | [optional] 
**messages** | [**[]ErrorMessage**](error-message) |  | [optional] 
**tracking_id** | **str** | TrackingID is the request tracking unique identifier | [optional] 
}

## Example

```python
from sailpoint.v2024.models.error import Error

error = Error(
detail_code='Internal Server Error',
messages=[
                    sailpoint.v2024.models.error_message_is_the_standard_api_error_response_message_type/.ErrorMessage is the standard API error response message type.(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'This is an error', )
                    ],
tracking_id='9cd03ef80e6a425eb6b11bdbb057cdb4'
)

```
[[Back to top]](#) 

