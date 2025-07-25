---
id: beta-lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LifecycleState', 'BetaLifecycleState'] 
slug: /tools/sdk/python/beta/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState', 'BetaLifecycleState']
---

# LifecycleState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Lifecycle state ID. | [optional] [readonly] 
**name** | **str** | Lifecycle state name. | [optional] [readonly] 
**technical_name** | **str** | Lifecycle state technical name. This is for internal use. | [optional] [readonly] 
**description** | **str** | Lifecycle state description. | [optional] 
**created** | **datetime** | Lifecycle state created date. | [optional] [readonly] 
**modified** | **datetime** | Lifecycle state modified date. | [optional] [readonly] 
**enabled** | **bool** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to False]
**identity_count** | **int** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**email_notification_option** | [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**account_actions** | [**[]AccountAction**](account-action) |  | [optional] 
**access_profile_ids** | **[]str** | List of access-profile IDs that are associated with the lifecycle state. | [optional] 
}

## Example

```python
from sailpoint.beta.models.lifecycle_state import LifecycleState

lifecycle_state = LifecycleState(
id='2c9180835d2e5168015d32f890ca1581',
name='Lifecycle Name',
technical_name='lifecycleTechnicalName',
description='LifecycleDescription',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
enabled=True,
identity_count=12,
email_notification_option=sailpoint.beta.models.email_notification_option.Email Notification Option(
                    notify_managers = True, 
                    notify_all_admins = True, 
                    notify_specific_users = True, 
                    email_address_list = [test@test.com, test2@test.com], ),
account_actions=[
                    sailpoint.beta.models.account_action.Account Action(
                        action = 'ENABLE', 
                        source_ids = [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500], )
                    ],
access_profile_ids=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500]
)

```
[[Back to top]](#) 

