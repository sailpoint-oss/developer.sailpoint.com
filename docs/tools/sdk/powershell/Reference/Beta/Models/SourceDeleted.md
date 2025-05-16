---
id: beta-source-deleted
title: SourceDeleted
pagination_label: SourceDeleted
sidebar_label: SourceDeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceDeleted', 'BetaSourceDeleted'] 
slug: /tools/sdk/powershell/beta/models/source-deleted
tags: ['SDK', 'Software Development Kit', 'SourceDeleted', 'BetaSourceDeleted']
---


# SourceDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source's unique ID. | [required]
**Name** | **String** | Source name. | [required]
**Type** | **String** | Connection type. | [required]
**Deleted** | **System.DateTime** | Date and time when the source was deleted. | [required]
**Connector** | **String** | Connector type used to connect to the source. | [required]
**Actor** | [**SourceDeletedActor**](source-deleted-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceDeleted = Initialize-BetaSourceDeleted  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Deleted 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$SourceDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

