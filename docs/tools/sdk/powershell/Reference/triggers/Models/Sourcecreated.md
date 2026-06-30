---
id: sourcecreated
title: Sourcecreated
pagination_label: Sourcecreated
sidebar_label: Sourcecreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcecreated', 'Sourcecreated'] 
slug: /tools/sdk/powershell/triggers/models/sourcecreated
tags: ['SDK', 'Software Development Kit', 'Sourcecreated', 'Sourcecreated']
---


# Sourcecreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the source. | [required]
**Name** | **String** | Human friendly name of the source. | [required]
**Type** | **String** | The connection type. | [required]
**Created** | **System.DateTime** | The date and time the source was created. | [required]
**Connector** | **String** | The connector type used to connect to the source. | [required]
**Actor** | [**SourcecreatedActor**](sourcecreated-actor) |  | [required]

## Examples

- Prepare the resource
```powershell
$Sourcecreated = Initialize-Sourcecreated  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Created 2021-03-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null
```

- Convert the resource to JSON
```powershell
$Sourcecreated | ConvertTo-JSON
```


[[Back to top]](#) 

