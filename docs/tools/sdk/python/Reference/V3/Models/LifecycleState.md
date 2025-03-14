---
id: lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LifecycleState', 'LifecycleState'] 
slug: /tools/sdk/python/v3/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState', 'LifecycleState']
---

# LifecycleState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**enabled** | **bool** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to False]
**technical_name** | **str** | The lifecycle state's technical name. This is for internal use. | [required]
**description** | **str** | Lifecycle state's description. | [optional] 
**identity_count** | **int** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**email_notification_option** | [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**account_actions** | [**[]AccountAction**](account-action) |  | [optional] 
**access_profile_ids** | **[]str** | List of unique access-profile IDs that are associated with the lifecycle state. | [optional] 
**identity_state** | **str** | The lifecycle state's associated identity state. This field is generally 'null'. | [optional] 
}

## Example

```python
from sailpoint.v3.models.lifecycle_state import LifecycleState

lifecycle_state = LifecycleState(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
enabled=True,
technical_name='Technical Name',
description='Lifecycle description',
identity_count=42,
email_notification_option=sailpoint.v3.models.email_notification_option.EmailNotificationOption(
                    notify_managers = True, 
                    notify_all_admins = True, 
                    notify_specific_users = True, 
                    email_address_list = [test@test.com, test2@test.com], ),
account_actions=[
                    sailpoint.v3.models.account_action.AccountAction(
                        action = 'ENABLE', 
                        source_ids = [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500], )
                    ],
access_profile_ids=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500],
identity_state=''
)

```
[[Back to top]](#) 

