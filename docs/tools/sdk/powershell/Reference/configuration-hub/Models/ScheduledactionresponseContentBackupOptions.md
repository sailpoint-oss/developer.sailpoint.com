---
id: scheduledactionresponse-content-backup-options
title: ScheduledactionresponseContentBackupOptions
pagination_label: ScheduledactionresponseContentBackupOptions
sidebar_label: ScheduledactionresponseContentBackupOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledactionresponseContentBackupOptions', 'ScheduledactionresponseContentBackupOptions'] 
slug: /tools/sdk/powershell/configurationhub/models/scheduledactionresponse-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContentBackupOptions', 'ScheduledactionresponseContentBackupOptions']
---


# ScheduledactionresponseContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | [**map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue**](scheduledactionresponse-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledactionresponseContentBackupOptions = Initialize-ScheduledactionresponseContentBackupOptions  -IncludeTypes ["ROLE","IDENTITY_PROFILE"] `
 -ObjectOptions {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}
```

- Convert the resource to JSON
```powershell
$ScheduledactionresponseContentBackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

