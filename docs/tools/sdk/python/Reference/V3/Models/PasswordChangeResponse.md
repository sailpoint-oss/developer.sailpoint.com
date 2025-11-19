---
id: password-change-response
title: PasswordChangeResponse
pagination_label: PasswordChangeResponse
sidebar_label: PasswordChangeResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordChangeResponse', 'PasswordChangeResponse'] 
slug: /tools/sdk/python/v3/models/password-change-response
tags: ['SDK', 'Software Development Kit', 'PasswordChangeResponse', 'PasswordChangeResponse']
---

# PasswordChangeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The password change request ID | [optional] 
**state** |  **Enum** [  'IN_PROGRESS',    'FINISHED',    'FAILED' ] | Password change state | [optional] 
}

## Example

```python
from sailpoint.v3.models.password_change_response import PasswordChangeResponse

password_change_response = PasswordChangeResponse(
request_id='089899f13a8f4da7824996191587bab9',
state='IN_PROGRESS'
)

```
[[Back to top]](#) 

