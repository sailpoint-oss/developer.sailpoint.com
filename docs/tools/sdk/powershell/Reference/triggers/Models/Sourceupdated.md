---
id: sourceupdated
title: Sourceupdated
pagination_label: Sourceupdated
sidebar_label: Sourceupdated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceupdated', 'Sourceupdated'] 
slug: /tools/sdk/powershell/triggers/models/sourceupdated
tags: ['SDK', 'Software Development Kit', 'Sourceupdated', 'Sourceupdated']
---


# Sourceupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the source. | [required]
**Name** | **String** | The user friendly name of the source. | [required]
**Type** | **String** | The connection type of the source. | [required]
**Modified** | **System.DateTime** | The date and time the source was modified. | [required]
**Connector** | **String** | The connector type used to connect to the source. | [required]
**Actor** | [**SourceupdatedActor**](sourceupdated-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$Sourceupdated = Initialize-Sourceupdated  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Corporate Active Directory `
 -Type DIRECT_CONNECT `
 -Modified 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$Sourceupdated | ConvertTo-JSON
```


[[Back to top]](#) 

