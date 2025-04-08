---
id: v2024-scheduled-action-payload
title: ScheduledActionPayload
pagination_label: ScheduledActionPayload
sidebar_label: ScheduledActionPayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledActionPayload', 'V2024ScheduledActionPayload'] 
slug: /tools/sdk/powershell/v2024/models/scheduled-action-payload
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayload', 'V2024ScheduledActionPayload']
---


# ScheduledActionPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobType** |  **Enum** [  "BACKUP",    "CREATE_DRAFT",    "CONFIG_DEPLOY_DRAFT" ] | Type of the scheduled job. | [required]
**StartTime** | **System.DateTime** | The time when this scheduled action should start. Optional. | [optional] 
**CronString** | **String** | Cron expression defining the schedule for this action. Optional for repeated events. | [optional] 
**TimeZoneId** | **String** | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [optional] 
**Content** | [**ScheduledActionPayloadContent**](scheduled-action-payload-content) |  | [required]

## Examples

- Prepare the resource
```powershell
$ScheduledActionPayload = Initialize-PSSailpoint.V2024ScheduledActionPayload  -JobType BACKUP `
 -StartTime 2024-08-16T14:16:58.389Z `
 -CronString 0 0 12 * * ? `
 -TimeZoneId America/Chicago `
 -Content null
```

- Convert the resource to JSON
```powershell
$ScheduledActionPayload | ConvertTo-JSON
```


[[Back to top]](#) 

