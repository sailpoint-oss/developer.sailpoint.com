---
id: scheduledactionresponse-content-backup-options-object-options-value
title: ScheduledactionresponseContentBackupOptionsObjectOptionsValue
pagination_label: ScheduledactionresponseContentBackupOptionsObjectOptionsValue
sidebar_label: ScheduledactionresponseContentBackupOptionsObjectOptionsValue
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledactionresponseContentBackupOptionsObjectOptionsValue', 'ScheduledactionresponseContentBackupOptionsObjectOptionsValue'] 
slug: /tools/sdk/powershell/configurationhub/models/scheduledactionresponse-content-backup-options-object-options-value
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContentBackupOptionsObjectOptionsValue', 'ScheduledactionresponseContentBackupOptionsObjectOptionsValue']
---


# ScheduledactionresponseContentBackupOptionsObjectOptionsValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | **[]String** | Set of names to be included. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledactionresponseContentBackupOptionsObjectOptionsValue = Initialize-ScheduledactionresponseContentBackupOptionsObjectOptionsValue  -IncludedNames ["Admin Role","User Role"]
```

- Convert the resource to JSON
```powershell
$ScheduledactionresponseContentBackupOptionsObjectOptionsValue | ConvertTo-JSON
```


[[Back to top]](#) 

