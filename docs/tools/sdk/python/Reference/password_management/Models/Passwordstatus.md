---
id: passwordstatus
title: Passwordstatus
pagination_label: Passwordstatus
sidebar_label: Passwordstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passwordstatus', 'Passwordstatus'] 
slug: /tools/sdk/python/password-management/models/passwordstatus
tags: ['SDK', 'Software Development Kit', 'Passwordstatus', 'Passwordstatus']
---

# Passwordstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The password change request ID | [optional] 
**state** |  **Enum** [  'IN_PROGRESS',    'FINISHED',    'FAILED' ] | Password change state | [optional] 
**errors** | **[]str** | The errors during the password change request | [optional] 
**source_ids** | **[]str** | List of source IDs in the password change request | [optional] 
}

## Example

```python
from sailpoint.password_management.models.passwordstatus import Passwordstatus

passwordstatus = Passwordstatus(
request_id='089899f13a8f4da7824996191587bab9',
state='IN_PROGRESS',
errors=["The password change payload is invalid"],
source_ids=["2c918083746f642c01746f990884012a"]
)

```
[[Back to top]](#) 

