---
id: set-icon-request
title: SetIconRequest
pagination_label: SetIconRequest
sidebar_label: SetIconRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SetIconRequest'] 
slug: /tools/sdk/powershell/beta/models/set-icon-request
tags: ['SDK', 'Software Development Kit', 'SetIconRequest']
---


# SetIconRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** |  **System.IO.FileInfo** | file with icon. Allowed mime-types [&#39;image/png&#39;, &#39;image/jpeg&#39;] | 

## Examples

- Prepare the resource
```powershell
$SetIconRequest = Initialize-BetaSetIconRequest  -Image \x00\x00\x00\x02
```

- Convert the resource to JSON
```powershell
$SetIconRequest | ConvertTo-JSON
```


[[Back to top]](#) 

