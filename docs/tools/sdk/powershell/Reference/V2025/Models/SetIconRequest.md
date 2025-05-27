---
id: v2025-set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetIconRequest', 'V2025SetIconRequest'] 
slug: /tools/sdk/powershell/v2025/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest', 'V2025SetIconRequest']
---


# SetIconRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** | **System.IO.FileInfo** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]

## Examples

- Prepare the resource
```powershell
$SetIconRequest = Initialize-V2025SetIconRequest  -Image \x00\x00\x00\x02
```

- Convert the resource to JSON
```powershell
$SetIconRequest | ConvertTo-JSON
```


[[Back to top]](#) 

