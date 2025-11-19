---
id: v2025-approval-config-reminder-config
title: ApprovalConfigReminderConfig
pagination_label: ApprovalConfigReminderConfig
sidebar_label: ApprovalConfigReminderConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalConfigReminderConfig', 'V2025ApprovalConfigReminderConfig'] 
slug: /tools/sdk/python/v2025/models/approval-config-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigReminderConfig', 'V2025ApprovalConfigReminderConfig']
---

# ApprovalConfigReminderConfig

Configuration for reminders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if reminders are enabled. | [optional] [default to False]
**days_until_first_reminder** | **int** | Number of days until the first reminder. | [optional] 
**reminder_cron_schedule** | **str** | Cron schedule for reminders. | [optional] 
**max_reminders** | **int** | Maximum number of reminders. Max is 20. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_config_reminder_config import ApprovalConfigReminderConfig

approval_config_reminder_config = ApprovalConfigReminderConfig(
enabled=False,
days_until_first_reminder=0,
reminder_cron_schedule='1 1 1 1 1',
max_reminders=5
)

```
[[Back to top]](#) 

