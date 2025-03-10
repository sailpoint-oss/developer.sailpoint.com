---
id: v2024-email-notification-option
title: EmailNotificationOption
pagination_label: EmailNotificationOption
sidebar_label: EmailNotificationOption
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EmailNotificationOption', 'V2024EmailNotificationOption'] 
slug: /tools/sdk/python/v2024/models/email-notification-option
tags: ['SDK', 'Software Development Kit', 'EmailNotificationOption', 'V2024EmailNotificationOption']
---

# EmailNotificationOption

This is used for representing email configuration for a lifecycle state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notify_managers** | **bool** | If true, then the manager is notified of the lifecycle state change. | [optional] [default to False]
**notify_all_admins** | **bool** | If true, then all the admins are notified of the lifecycle state change. | [optional] [default to False]
**notify_specific_users** | **bool** | If true, then the users specified in \"emailAddressList\" below are notified of lifecycle state change. | [optional] [default to False]
**email_address_list** | **[]str** | List of user email addresses. If \"notifySpecificUsers\" option is true, then these users are notified of lifecycle state change. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.email_notification_option import EmailNotificationOption

email_notification_option = EmailNotificationOption(
notify_managers=True,
notify_all_admins=True,
notify_specific_users=True,
email_address_list=[test@test.com, test2@test.com]
)

```
[[Back to top]](#) 

