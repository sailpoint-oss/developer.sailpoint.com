---
id: v2025-scheduled-action-response
title: ScheduledActionResponse
pagination_label: ScheduledActionResponse
sidebar_label: ScheduledActionResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledActionResponse', 'V2025ScheduledActionResponse'] 
slug: /tools/sdk/powershell/v2025/models/scheduled-action-response
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponse', 'V2025ScheduledActionResponse']
---


# ScheduledActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for this scheduled action. | [optional] 
**Created** | **System.DateTime** | The time when this scheduled action was created. | [optional] 
**JobType** |  **Enum** [  "BACKUP",    "CREATE_DRAFT",    "CONFIG_DEPLOY_DRAFT" ] | Type of the scheduled job. | [optional] 
**Content** | [**ScheduledActionResponseContent**](scheduled-action-response-content) |  | [optional] 
**StartTime** | **System.DateTime** | The time when this scheduled action should start. | [optional] 
**CronString** | **String** | Cron expression defining the schedule for this action. | [optional] 
**TimeZoneId** | **String** | Time zone ID for interpreting the cron expression. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledActionResponse = Initialize-PSSailpoint.V2025ScheduledActionResponse  -Id 3469b87d-48ca-439a-868f-2160001da8c1 `
 -Created 2021-05-11T22:23:16Z `
 -JobType BACKUP `
 -Content null `
 -StartTime 2021-05-12T10:00Z `
 -CronString 0 0 12 * * ? `
 -TimeZoneId America/Chicago
```

- Convert the resource to JSON
```powershell
$ScheduledActionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

