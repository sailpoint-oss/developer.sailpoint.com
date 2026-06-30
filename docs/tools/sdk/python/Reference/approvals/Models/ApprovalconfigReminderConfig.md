---
id: approvalconfig-reminder-config
title: ApprovalconfigReminderConfig
pagination_label: ApprovalconfigReminderConfig
sidebar_label: ApprovalconfigReminderConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalconfigReminderConfig', 'ApprovalconfigReminderConfig'] 
slug: /tools/sdk/python/approvals/models/approvalconfig-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigReminderConfig', 'ApprovalconfigReminderConfig']
---

# ApprovalconfigReminderConfig

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
from sailpoint.approvals.models.approvalconfig_reminder_config import ApprovalconfigReminderConfig

approvalconfig_reminder_config = ApprovalconfigReminderConfig(
enabled=False,
days_until_first_reminder=0,
reminder_cron_schedule='1 1 1 1 1',
max_reminders=5
)

```
[[Back to top]](#) 

