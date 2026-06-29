---
id: approvalconfig-reminder-config
title: ApprovalconfigReminderConfig
pagination_label: ApprovalconfigReminderConfig
sidebar_label: ApprovalconfigReminderConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalconfigReminderConfig', 'ApprovalconfigReminderConfig'] 
slug: /tools/sdk/powershell/sources/models/approvalconfig-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigReminderConfig', 'ApprovalconfigReminderConfig']
---


# ApprovalconfigReminderConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if reminders are enabled. | [optional] [default to $false]
**DaysUntilFirstReminder** | **Int64** | Number of days until the first reminder. | [optional] 
**ReminderCronSchedule** | **String** | Cron schedule for reminders. | [optional] 
**MaxReminders** | **Int64** | Maximum number of reminders. Max is 20. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalconfigReminderConfig = Initialize-ApprovalconfigReminderConfig  -Enabled false `
 -DaysUntilFirstReminder 0 `
 -ReminderCronSchedule 1 1 1 1 1 `
 -MaxReminders 5
```

- Convert the resource to JSON
```powershell
$ApprovalconfigReminderConfig | ConvertTo-JSON
```


[[Back to top]](#) 

