---
id: v2024-scheduled-action-response-content
title: ScheduledActionResponseContent
pagination_label: ScheduledActionResponseContent
sidebar_label: ScheduledActionResponseContent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledActionResponseContent', 'V2024ScheduledActionResponseContent'] 
slug: /tools/sdk/powershell/v2024/models/scheduled-action-response-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContent', 'V2024ScheduledActionResponseContent']
---


# ScheduledActionResponseContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the scheduled action (maximum 50 characters). | [optional] 
**BackupOptions** | [**ScheduledActionResponseContentBackupOptions**](scheduled-action-response-content-backup-options) |  | [optional] 
**SourceBackupId** | **String** | ID of the source backup. Required for CREATE_DRAFT jobs only. | [optional] 
**SourceTenant** | **String** | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [optional] 
**DraftId** | **String** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledActionResponseContent = Initialize-V2024ScheduledActionResponseContent  -Name Daily Backup `
 -BackupOptions null `
 -SourceBackupId 5678b87d-48ca-439a-868f-2160001da8c2 `
 -SourceTenant tenant-name `
 -DraftId 9012b87d-48ca-439a-868f-2160001da8c3
```

- Convert the resource to JSON
```powershell
$ScheduledActionResponseContent | ConvertTo-JSON
```


[[Back to top]](#) 

