---
id: v2024-sp-config-import-job-status
title: SpConfigImportJobStatus
pagination_label: SpConfigImportJobStatus
sidebar_label: SpConfigImportJobStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigImportJobStatus', 'V2024SpConfigImportJobStatus'] 
slug: /tools/sdk/powershell/v2024/models/sp-config-import-job-status
tags: ['SDK', 'Software Development Kit', 'SpConfigImportJobStatus', 'V2024SpConfigImportJobStatus']
---


# SpConfigImportJobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **String** | Unique id assigned to this job. | [required]
**Status** |  **Enum** [  "NOT_STARTED",    "IN_PROGRESS",    "COMPLETE",    "CANCELLED",    "FAILED" ] | Status of the job. | [required]
**Type** |  **Enum** [  "EXPORT",    "IMPORT" ] | Type of the job, either export or import. | [required]
**Expiration** | **System.DateTime** | The time until which the artifacts will be available for download. | [required]
**Created** | **System.DateTime** | The time the job was started. | [required]
**Modified** | **System.DateTime** | The time of the last update to the job. | [required]
**Message** | **String** | This message contains additional information about the overall status of the job. | [optional] 
**Completed** | **System.DateTime** | The time the job was completed. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigImportJobStatus = Initialize-PSSailpoint.V2024SpConfigImportJobStatus  -JobId 3469b87d-48ca-439a-868f-2160001da8c1 `
 -Status COMPLETE `
 -Type IMPORT `
 -Expiration 2021-05-11T22:23:16Z `
 -Created 2021-05-11T22:23:16Z `
 -Modified 2021-05-11T22:23:16Z `
 -Message Download import results for details. `
 -Completed 2021-05-11T22:23:16Z
```

- Convert the resource to JSON
```powershell
$SpConfigImportJobStatus | ConvertTo-JSON
```


[[Back to top]](#) 

