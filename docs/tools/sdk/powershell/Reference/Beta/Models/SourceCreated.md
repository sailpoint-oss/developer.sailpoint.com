---
id: beta-source-created
title: SourceCreated
pagination_label: SourceCreated
sidebar_label: SourceCreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceCreated', 'BetaSourceCreated'] 
slug: /tools/sdk/powershell/beta/models/source-created
tags: ['SDK', 'Software Development Kit', 'SourceCreated', 'BetaSourceCreated']
---


# SourceCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source's unique ID. | [required]
**Name** | **String** | Source name. | [required]
**Type** | **String** | Connection type. | [required]
**Created** | **System.DateTime** | Date and time when the source was created. | [required]
**Connector** | **String** | Connector type used to connect to the source. | [required]
**Actor** | [**SourceCreatedActor**](source-created-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceCreated = Initialize-BetaSourceCreated  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Created 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$SourceCreated | ConvertTo-JSON
```


[[Back to top]](#) 

