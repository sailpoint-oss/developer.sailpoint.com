---
id: v2024-set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetIconRequest', 'V2024SetIconRequest'] 
slug: /tools/sdk/powershell/v2024/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest', 'V2024SetIconRequest']
---


# SetIconRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** |  **System.IO.FileInfo** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]

## Examples

- Prepare the resource
```powershell
$SetIconRequest = Initialize-PSSailpoint.V2024SetIconRequest  -Image \x00\x00\x00\x02
```

- Convert the resource to JSON
```powershell
$SetIconRequest | ConvertTo-JSON
```


[[Back to top]](#) 

