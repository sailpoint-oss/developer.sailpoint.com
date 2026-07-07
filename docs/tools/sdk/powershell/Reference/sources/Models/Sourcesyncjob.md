---
id: sourcesyncjob
title: Sourcesyncjob
pagination_label: Sourcesyncjob
sidebar_label: Sourcesyncjob
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcesyncjob', 'Sourcesyncjob'] 
slug: /tools/sdk/powershell/sources/models/sourcesyncjob
tags: ['SDK', 'Software Development Kit', 'Sourcesyncjob', 'Sourcesyncjob']
---


# Sourcesyncjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Job ID. | [required]
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | [required]
**Payload** | [**Sourcesyncpayload**](sourcesyncpayload) |  | [required]

## Examples

- Prepare the resource
```powershell
$Sourcesyncjob = Initialize-Sourcesyncjob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$Sourcesyncjob | ConvertTo-JSON
```


[[Back to top]](#) 

