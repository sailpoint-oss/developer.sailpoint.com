---
id: identitysyncjob
title: Identitysyncjob
pagination_label: Identitysyncjob
sidebar_label: Identitysyncjob
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitysyncjob', 'Identitysyncjob'] 
slug: /tools/sdk/powershell/identities/models/identitysyncjob
tags: ['SDK', 'Software Development Kit', 'Identitysyncjob', 'Identitysyncjob']
---


# Identitysyncjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Job ID. | [required]
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | [required]
**Payload** | [**Identitysyncpayload**](identitysyncpayload) |  | [required]

## Examples

- Prepare the resource
```powershell
$Identitysyncjob = Initialize-Identitysyncjob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$Identitysyncjob | ConvertTo-JSON
```


[[Back to top]](#) 

