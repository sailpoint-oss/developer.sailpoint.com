---
id: beta-sp-config-export-job
title: SpConfigExportJob
pagination_label: SpConfigExportJob
sidebar_label: SpConfigExportJob
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigExportJob'] 
slug: /tools/sdk/powershell/beta/models/sp-config-export-job
tags: ['SDK', 'Software Development Kit', 'SpConfigExportJob']
---


# SpConfigExportJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** |  **String** | Unique id assigned to this job. | [required]
**Status** |   **Enum** [  "NOT_STARTED",    "IN_PROGRESS",    "COMPLETE",    "CANCELLED",    "FAILED" ] | Status of the job. | [required]
**Type** |   **Enum** [  "EXPORT",    "IMPORT" ] | Type of the job, either export or import. | [required]
**Expiration** |  **System.DateTime** | The time until which the artifacts will be available for download. | [required]
**Created** |  **System.DateTime** | The time the job was started. | [required]
**Modified** |  **System.DateTime** | The time of the last update to the job. | [required]
**Description** |  Pointer to **String** | Optional user defined description/name for export job. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigExportJob = Initialize-PSSailpoint.BetaSpConfigExportJob  -JobId 3469b87d-48ca-439a-868f-2160001da8c1 `
 -Status COMPLETE `
 -Type IMPORT `
 -Expiration 2021-05-11T22:23:16Z `
 -Created 2021-05-11T22:23:16Z `
 -Modified 2021-05-11T22:23:16Z `
 -Description ETS configuration objects from Acme-Solar sandbox
```

- Convert the resource to JSON
```powershell
$SpConfigExportJob | ConvertTo-JSON
```


[[Back to top]](#) 

