---
id: beta-source-updated
title: SourceUpdated
pagination_label: SourceUpdated
sidebar_label: SourceUpdated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUpdated', 'BetaSourceUpdated'] 
slug: /tools/sdk/powershell/beta/models/source-updated
tags: ['SDK', 'Software Development Kit', 'SourceUpdated', 'BetaSourceUpdated']
---


# SourceUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source's unique ID. | [required]
**Name** | **String** | Source name. | [required]
**Type** | **String** | Connection type. | [required]
**Modified** | **System.DateTime** | Date and time when the source was modified. | [required]
**Connector** | **String** | Connector type used to connect to the source. | [required]
**Actor** | [**SourceUpdatedActor**](source-updated-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceUpdated = Initialize-BetaSourceUpdated  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Modified 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$SourceUpdated | ConvertTo-JSON
```


[[Back to top]](#) 

