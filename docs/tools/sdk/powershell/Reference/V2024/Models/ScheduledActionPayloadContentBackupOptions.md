---
id: v2024-scheduled-action-payload-content-backup-options
title: ScheduledActionPayloadContentBackupOptions
pagination_label: ScheduledActionPayloadContentBackupOptions
sidebar_label: ScheduledActionPayloadContentBackupOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledActionPayloadContentBackupOptions', 'V2024ScheduledActionPayloadContentBackupOptions'] 
slug: /tools/sdk/powershell/v2024/models/scheduled-action-payload-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayloadContentBackupOptions', 'V2024ScheduledActionPayloadContentBackupOptions']
---


# ScheduledActionPayloadContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | [**map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue**](scheduled-action-response-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledActionPayloadContentBackupOptions = Initialize-V2024ScheduledActionPayloadContentBackupOptions  -IncludeTypes [ROLE, IDENTITY_PROFILE] `
 -ObjectOptions {SOURCE={includedNames=[Source1, Source2]}, ROLE={includedNames=[Admin Role, User Role]}}
```

- Convert the resource to JSON
```powershell
$ScheduledActionPayloadContentBackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

