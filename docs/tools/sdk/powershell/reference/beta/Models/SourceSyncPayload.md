---
id: source-sync-payload
title: SourceSyncPayload
pagination_label: SourceSyncPayload
sidebar_label: SourceSyncPayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceSyncPayload'] 
slug: /tools/sdk/powershell/beta/models/source-sync-payload
tags: ['SDK', 'Software Development Kit', 'SourceSyncPayload']
---


# SourceSyncPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **String** | Payload type. | [required]
**DataJson** |  **String** | Payload type. | [required]

## Examples

- Prepare the resource
```powershell
$SourceSyncPayload = Initialize-PSSailpoint.BetaSourceSyncPayload  -Type SYNCHRONIZE_SOURCE_ATTRIBUTES `
 -DataJson {&quot;sourceId&quot;:&quot;2c918083746f642c01746f990884012a&quot;}
```

- Convert the resource to JSON
```powershell
$SourceSyncPayload | ConvertTo-JSON
```


[[Back to top]](#) 

