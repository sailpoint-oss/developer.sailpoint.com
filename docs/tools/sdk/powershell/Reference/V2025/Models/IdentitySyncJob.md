---
id: v2025-identity-sync-job
title: IdentitySyncJob
pagination_label: IdentitySyncJob
sidebar_label: IdentitySyncJob
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitySyncJob', 'V2025IdentitySyncJob'] 
slug: /tools/sdk/powershell/v2025/models/identity-sync-job
tags: ['SDK', 'Software Development Kit', 'IdentitySyncJob', 'V2025IdentitySyncJob']
---


# IdentitySyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Job ID. | [required]
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | [required]
**Payload** | [**IdentitySyncPayload**](identity-sync-payload) |  | [required]

## Examples

- Prepare the resource
```powershell
$IdentitySyncJob = Initialize-V2025IdentitySyncJob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$IdentitySyncJob | ConvertTo-JSON
```


[[Back to top]](#) 

