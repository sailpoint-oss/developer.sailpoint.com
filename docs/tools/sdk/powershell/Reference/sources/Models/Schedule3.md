---
id: schedule3
title: Schedule3
pagination_label: Schedule3
sidebar_label: Schedule3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule3', 'Schedule3'] 
slug: /tools/sdk/powershell/sources/models/schedule3
tags: ['SDK', 'Software Development Kit', 'Schedule3', 'Schedule3']
---


# Schedule3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_AGGREGATION",    "GROUP_AGGREGATION" ] | The type of the Schedule. | [required]
**CronExpression** | **String** | The cron expression of the schedule. | [required]

## Examples

- Prepare the resource
```powershell
$Schedule3 = Initialize-Schedule3  -Type ACCOUNT_AGGREGATION `
 -CronExpression 0 0 5,13,21 * * ?
```

- Convert the resource to JSON
```powershell
$Schedule3 | ConvertTo-JSON
```


[[Back to top]](#) 

