---
id: scheduledactionresponse-content
title: ScheduledactionresponseContent
pagination_label: ScheduledactionresponseContent
sidebar_label: ScheduledactionresponseContent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledactionresponseContent', 'ScheduledactionresponseContent'] 
slug: /tools/sdk/powershell/configurationhub/models/scheduledactionresponse-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContent', 'ScheduledactionresponseContent']
---


# ScheduledactionresponseContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the scheduled action (maximum 50 characters). | [optional] 
**BackupOptions** | [**ScheduledactionresponseContentBackupOptions**](scheduledactionresponse-content-backup-options) |  | [optional] 
**SourceBackupId** | **String** | ID of the source backup. Required for CREATE_DRAFT jobs only. | [optional] 
**SourceTenant** | **String** | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [optional] 
**DraftId** | **String** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledactionresponseContent = Initialize-ScheduledactionresponseContent  -Name Daily Backup `
 -BackupOptions null `
 -SourceBackupId 5678b87d-48ca-439a-868f-2160001da8c2 `
 -SourceTenant tenant-name `
 -DraftId 9012b87d-48ca-439a-868f-2160001da8c3
```

- Convert the resource to JSON
```powershell
$ScheduledactionresponseContent | ConvertTo-JSON
```


[[Back to top]](#) 

