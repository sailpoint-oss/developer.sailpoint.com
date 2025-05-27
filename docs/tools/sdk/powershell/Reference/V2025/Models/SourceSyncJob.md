---
id: v2025-source-sync-job
title: SourceSyncJob
pagination_label: SourceSyncJob
sidebar_label: SourceSyncJob
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceSyncJob', 'V2025SourceSyncJob'] 
slug: /tools/sdk/powershell/v2025/models/source-sync-job
tags: ['SDK', 'Software Development Kit', 'SourceSyncJob', 'V2025SourceSyncJob']
---


# SourceSyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Job ID. | [required]
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | [required]
**Payload** | [**SourceSyncPayload**](source-sync-payload) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceSyncJob = Initialize-V2025SourceSyncJob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$SourceSyncJob | ConvertTo-JSON
```


[[Back to top]](#) 

