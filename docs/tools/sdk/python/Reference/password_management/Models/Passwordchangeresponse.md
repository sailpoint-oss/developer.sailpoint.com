---
id: passwordchangeresponse
title: Passwordchangeresponse
pagination_label: Passwordchangeresponse
sidebar_label: Passwordchangeresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passwordchangeresponse', 'Passwordchangeresponse'] 
slug: /tools/sdk/python/password-management/models/passwordchangeresponse
tags: ['SDK', 'Software Development Kit', 'Passwordchangeresponse', 'Passwordchangeresponse']
---

# Passwordchangeresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The password change request ID | [optional] 
**state** |  **Enum** [  'IN_PROGRESS',    'FINISHED',    'FAILED' ] | Password change state | [optional] 
}

## Example

```python
from sailpoint.password_management.models.passwordchangeresponse import Passwordchangeresponse

passwordchangeresponse = Passwordchangeresponse(
request_id='089899f13a8f4da7824996191587bab9',
state='IN_PROGRESS'
)

```
[[Back to top]](#) 

