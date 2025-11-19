---
id: v2025-launcher-owner
title: LauncherOwner
pagination_label: LauncherOwner
sidebar_label: LauncherOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LauncherOwner', 'V2025LauncherOwner'] 
slug: /tools/sdk/powershell/v2025/models/launcher-owner
tags: ['SDK', 'Software Development Kit', 'LauncherOwner', 'V2025LauncherOwner']
---


# LauncherOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Owner type | [required]
**Id** | **String** | Owner ID | [required]

## Examples

- Prepare the resource
```powershell
$LauncherOwner = Initialize-V2025LauncherOwner  -Type IDENTITY `
 -Id 123180847373330f0173c7e1756b6890
```

- Convert the resource to JSON
```powershell
$LauncherOwner | ConvertTo-JSON
```


[[Back to top]](#) 

