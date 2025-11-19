---
id: v2025-launcher-reference
title: LauncherReference
pagination_label: LauncherReference
sidebar_label: LauncherReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LauncherReference', 'V2025LauncherReference'] 
slug: /tools/sdk/powershell/v2025/models/launcher-reference
tags: ['SDK', 'Software Development Kit', 'LauncherReference', 'V2025LauncherReference']
---


# LauncherReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW" ] | Type of Launcher reference | [optional] 
**Id** | **String** | ID of Launcher reference | [optional] 

## Examples

- Prepare the resource
```powershell
$LauncherReference = Initialize-V2025LauncherReference  -Type WORKFLOW `
 -Id 2fd6ff94-2081-4d29-acbc-83a0a2f744a5
```

- Convert the resource to JSON
```powershell
$LauncherReference | ConvertTo-JSON
```


[[Back to top]](#) 

