---
id: sourcesyncpayload
title: Sourcesyncpayload
pagination_label: Sourcesyncpayload
sidebar_label: Sourcesyncpayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourcesyncpayload', 'Sourcesyncpayload'] 
slug: /tools/sdk/powershell/sources/models/sourcesyncpayload
tags: ['SDK', 'Software Development Kit', 'Sourcesyncpayload', 'Sourcesyncpayload']
---


# Sourcesyncpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Payload type. | [required]
**DataJson** | **String** | Payload type. | [required]

## Examples

- Prepare the resource
```powershell
$Sourcesyncpayload = Initialize-Sourcesyncpayload  -Type SYNCHRONIZE_SOURCE_ATTRIBUTES `
 -DataJson {"sourceId":"2c918083746f642c01746f990884012a"}
```

- Convert the resource to JSON
```powershell
$Sourcesyncpayload | ConvertTo-JSON
```


[[Back to top]](#) 

