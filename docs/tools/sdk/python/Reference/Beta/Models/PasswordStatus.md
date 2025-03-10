---
id: beta-password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordStatus', 'BetaPasswordStatus'] 
slug: /tools/sdk/python/beta/models/password-status
tags: ['SDK', 'Software Development Kit', 'PasswordStatus', 'BetaPasswordStatus']
---

# PasswordStatus


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
from sailpoint.beta.models.password_status import PasswordStatus

password_status = PasswordStatus(
request_id='089899f13a8f4da7824996191587bab9',
state='IN_PROGRESS',
errors=[
                    ''
                    ],
source_ids=[
                    ''
                    ]
)

```
[[Back to top]](#) 

