---
id: beta-set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetIconRequest', 'BetaSetIconRequest'] 
slug: /tools/sdk/powershell/beta/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest', 'BetaSetIconRequest']
---


# SetIconRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** |  **System.IO.FileInfo** | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] | [required]

## Examples

- Prepare the resource
```powershell
$SetIconRequest = Initialize-PSSailpoint.BetaSetIconRequest  -Image \x00\x00\x00\x02
```

- Convert the resource to JSON
```powershell
$SetIconRequest | ConvertTo-JSON
```


[[Back to top]](#) 

