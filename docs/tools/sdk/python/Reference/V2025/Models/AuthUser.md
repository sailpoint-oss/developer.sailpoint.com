---
id: v2025-auth-user
title: AuthUser
pagination_label: AuthUser
sidebar_label: AuthUser
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AuthUser', 'V2025AuthUser'] 
slug: /tools/sdk/python/v2025/models/auth-user
tags: ['SDK', 'Software Development Kit', 'AuthUser', 'V2025AuthUser']
---

# AuthUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant** | **str** | Tenant name. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**uid** | **str** | Identity's unique identitifier. | [optional] 
**profile** | **str** | ID of the auth profile associated with the auth user. | [optional] 
**identification_number** | **str** | Auth user's employee number. | [optional] 
**email** | **str** | Auth user's email. | [optional] 
**phone** | **str** | Auth user's phone number. | [optional] 
**work_phone** | **str** | Auth user's work phone number. | [optional] 
**personal_email** | **str** | Auth user's personal email. | [optional] 
**firstname** | **str** | Auth user's first name. | [optional] 
**lastname** | **str** | Auth user's last name. | [optional] 
**display_name** | **str** | Auth user's name in displayed format. | [optional] 
**alias** | **str** | Auth user's alias. | [optional] 
**last_password_change_date** | **datetime** | Date of last password change. | [optional] 
**last_login_timestamp** | **int** | Timestamp of the last login (long type value). | [optional] 
**current_login_timestamp** | **int** | Timestamp of the current login (long type value). | [optional] 
**last_unlock_timestamp** | **datetime** | The date and time when the user was last unlocked. | [optional] 
**capabilities** | **[]str** | Array of the auth user's capabilities. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.auth_user import AuthUser

auth_user = AuthUser(
tenant='test-tenant',
id='2c91808458ae7a4f0158b1bbf8af0628',
uid='will.smith',
profile='2c91808458ae7a4f0158b1bbf8af0756',
identification_number='19-5588452',
email='william.smith@example.com',
phone='5555555555',
work_phone='5555555555',
personal_email='william.smith@example.com',
firstname='Will',
lastname='Smith',
display_name='Will Smith',
alias='will.smith',
last_password_change_date='2021-03-08T22:37:33.901Z',
last_login_timestamp=1656327185832,
current_login_timestamp=1656327185832,
last_unlock_timestamp='2021-03-08T22:37:33.901Z',
capabilities=[
                    'ORG_ADMIN'
                    ]
)

```
[[Back to top]](#) 

