---
id: v2025-schedule1
title: Schedule1
pagination_label: Schedule1
sidebar_label: Schedule1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule1', 'V2025Schedule1'] 
slug: /tools/sdk/powershell/v2025/models/schedule1
tags: ['SDK', 'Software Development Kit', 'Schedule1', 'V2025Schedule1']
---


# Schedule1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_AGGREGATION",    "GROUP_AGGREGATION" ] | The type of the Schedule. | [required]
**CronExpression** | **String** | The cron expression of the schedule. | [required]

## Examples

- Prepare the resource
```powershell
$Schedule1 = Initialize-PSSailpoint.V2025Schedule1  -Type ACCOUNT_AGGREGATION `
 -CronExpression 0 0 5,13,21 * * ?
```

- Convert the resource to JSON
```powershell
$Schedule1 | ConvertTo-JSON
```


[[Back to top]](#) 

