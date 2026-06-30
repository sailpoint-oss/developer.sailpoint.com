---
id: scheduledactionpayload-content
title: ScheduledactionpayloadContent
pagination_label: ScheduledactionpayloadContent
sidebar_label: ScheduledactionpayloadContent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledactionpayloadContent', 'ScheduledactionpayloadContent'] 
slug: /tools/sdk/powershell/configurationhub/models/scheduledactionpayload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContent', 'ScheduledactionpayloadContent']
---


# ScheduledactionpayloadContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the scheduled action (maximum 50 characters). | [required]
**BackupOptions** | [**ScheduledactionpayloadContentBackupOptions**](scheduledactionpayload-content-backup-options) |  | [optional] 
**SourceBackupId** | **String** | ID of the source backup. Required for CREATE_DRAFT jobs. | [optional] 
**SourceTenant** | **String** | Source tenant identifier. Required for CREATE_DRAFT jobs. | [optional] 
**DraftId** | **String** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledactionpayloadContent = Initialize-ScheduledactionpayloadContent  -Name Daily Backup `
 -BackupOptions null `
 -SourceBackupId 5678b87d-48ca-439a-868f-2160001da8c2 `
 -SourceTenant tenant-name `
 -DraftId 9012b87d-48ca-439a-868f-2160001da8c3
```

- Convert the resource to JSON
```powershell
$ScheduledactionpayloadContent | ConvertTo-JSON
```


[[Back to top]](#) 

