---
id: sourcedeleted
title: Sourcedeleted
pagination_label: Sourcedeleted
sidebar_label: Sourcedeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcedeleted', 'Sourcedeleted'] 
slug: /tools/sdk/powershell/triggers/models/sourcedeleted
tags: ['SDK', 'Software Development Kit', 'Sourcedeleted', 'Sourcedeleted']
---


# Sourcedeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the source. | [required]
**Name** | **String** | Human friendly name of the source. | [required]
**Type** | **String** | The connection type. | [required]
**Deleted** | **System.DateTime** | The date and time the source was deleted. | [required]
**Connector** | **String** | The connector type used to connect to the source. | [required]
**Actor** | [**SourcedeletedActor**](sourcedeleted-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$Sourcedeleted = Initialize-Sourcedeleted  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Deleted 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$Sourcedeleted | ConvertTo-JSON
```


[[Back to top]](#) 

