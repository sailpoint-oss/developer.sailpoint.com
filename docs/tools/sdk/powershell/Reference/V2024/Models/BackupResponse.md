---
id: v2024-backup-response
title: BackupResponse
pagination_label: BackupResponse
sidebar_label: BackupResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BackupResponse', 'V2024BackupResponse'] 
slug: /tools/sdk/powershell/v2024/models/backup-response
tags: ['SDK', 'Software Development Kit', 'BackupResponse', 'V2024BackupResponse']
---


# BackupResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **String** | Unique id assigned to this backup. | [optional] 
**Status** |  **Enum** [  "NOT_STARTED",    "IN_PROGRESS",    "COMPLETE",    "CANCELLED",    "FAILED" ] | Status of the backup. | [optional] 
**Type** |  **Enum** [  "BACKUP" ] | Type of the job, will always be BACKUP for this type of job. | [optional] 
**Tenant** | **String** | The name of the tenant performing the upload | [optional] 
**RequesterName** | **String** | The name of the requester. | [optional] 
**FileExists** | **Boolean** | Whether or not a file was created and stored for this backup. | [optional] [default to $true]
**Created** | **System.DateTime** | The time the job was started. | [optional] 
**Modified** | **System.DateTime** | The time of the last update to the job. | [optional] 
**Completed** | **System.DateTime** | The time the job was completed. | [optional] 
**Name** | **String** | The name assigned to the upload file in the request body. | [optional] 
**UserCanDelete** | **Boolean** | Whether this backup can be deleted by a regular user. | [optional] [default to $true]
**IsPartial** | **Boolean** | Whether this backup contains all supported object types or only some of them. | [optional] [default to $false]
**BackupType** |  **Enum** [  "UPLOADED",    "AUTOMATED",    "MANUAL" ] | Denotes how this backup was created. - MANUAL - The backup was created by a user. - AUTOMATED - The backup was created by devops. - AUTOMATED_DRAFT - The backup was created during a draft process. - UPLOADED - The backup was created by uploading an existing configuration file. | [optional] 
**Options** | [**BackupOptions**](backup-options) |  | [optional] 
**HydrationStatus** |  **Enum** [  "HYDRATED",    "NOT_HYDRATED" ] | Whether the object details of this backup are ready. | [optional] 
**TotalObjectCount** | **Int64** | Number of objects contained in this backup. | [optional] 
**CloudStorageStatus** |  **Enum** [  "SYNCED",    "NOT_SYNCED",    "SYNC_FAILED" ] | Whether this backup has been transferred to a customer storage location. | [optional] 

## Examples

- Prepare the resource
```powershell
$BackupResponse = Initialize-PSSailpoint.V2024BackupResponse  -JobId 3469b87d-48ca-439a-868f-2160001da8c1 `
 -Status COMPLETE `
 -Type BACKUP `
 -Tenant tenant-name `
 -RequesterName Requester Name `
 -FileExists true `
 -Created 2021-05-11T22:23:16Z `
 -Modified 2021-05-11T22:23:16Z `
 -Completed 2021-05-11T22:23:16Z `
 -Name Backup Name `
 -UserCanDelete false `
 -IsPartial false `
 -BackupType MANUAL `
 -Options null `
 -HydrationStatus NOT_HYDRATED `
 -TotalObjectCount 10 `
 -CloudStorageStatus SYNCED
```

- Convert the resource to JSON
```powershell
$BackupResponse | ConvertTo-JSON
```


[[Back to top]](#) 

