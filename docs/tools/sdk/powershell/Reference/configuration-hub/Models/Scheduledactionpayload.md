---
id: scheduledactionpayload
title: Scheduledactionpayload
pagination_label: Scheduledactionpayload
sidebar_label: Scheduledactionpayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Scheduledactionpayload', 'Scheduledactionpayload'] 
slug: /tools/sdk/powershell/configurationhub/models/scheduledactionpayload
tags: ['SDK', 'Software Development Kit', 'Scheduledactionpayload', 'Scheduledactionpayload']
---


# Scheduledactionpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobType** |  **Enum** [  "BACKUP",    "CREATE_DRAFT",    "CONFIG_DEPLOY_DRAFT" ] | Type of the scheduled job. | [required]
**StartTime** | **System.DateTime** | The time when this scheduled action should start. Optional. | [optional] 
**CronString** | **String** | Cron expression defining the schedule for this action. Optional for repeated events. | [optional] 
**TimeZoneId** | **String** | Time zone ID for interpreting the cron expression. Optional, will default to current time zone. | [optional] 
**Content** | [**ScheduledactionpayloadContent**](scheduledactionpayload-content) |  | [required]

## Examples

- Prepare the resource
```powershell
$Scheduledactionpayload = Initialize-Scheduledactionpayload  -JobType BACKUP `
 -StartTime 2024-08-16T14:16:58.389Z `
 -CronString 0 0 * * * * `
 -TimeZoneId America/Chicago `
 -Content null
```

- Convert the resource to JSON
```powershell
$Scheduledactionpayload | ConvertTo-JSON
```


[[Back to top]](#) 

