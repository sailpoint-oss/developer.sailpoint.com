---
id: identity-sync-job
title: IdentitySyncJob
pagination_label: IdentitySyncJob
sidebar_label: IdentitySyncJob
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentitySyncJob'] 
slug: /tools/sdk/powershell/beta/models/identity-sync-job
tags: ['SDK', 'Software Development Kit', 'IdentitySyncJob']
---


# IdentitySyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Job ID. | 
**Status** |   **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | 
**Payload** |  [**IdentitySyncPayload**](identity-sync-payload) |  | 

## Examples

- Prepare the resource
```powershell
$IdentitySyncJob = Initialize-PSSailpointBetaIdentitySyncJob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$IdentitySyncJob | ConvertTo-JSON
```


[[Back to top]](#) 

