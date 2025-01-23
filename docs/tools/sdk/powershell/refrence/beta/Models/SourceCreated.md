---
id: source-created
title: SourceCreated
pagination_label: SourceCreated
sidebar_label: SourceCreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceCreated'] 
slug: /tools/sdk/powershell/beta/models/source-created
tags: ['SDK', 'Software Development Kit', 'SourceCreated']
---


# SourceCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the source. | [required]
**Name** |  **String** | Human friendly name of the source. | [required]
**Type** |  **String** | The connection type. | [required]
**Created** |  **System.DateTime** | The date and time the source was created. | [required]
**Connector** |  **String** | The connector type used to connect to the source. | [required]
**Actor** |  [**SourceCreatedActor**](source-created-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceCreated = Initialize-PSSailpoint.BetaSourceCreated  -Id 2c9180866166b5b0016167c32ef31a66 `
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

