---
id: v2025-launcher-request-reference
title: LauncherRequestReference
pagination_label: LauncherRequestReference
sidebar_label: LauncherRequestReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LauncherRequestReference', 'V2025LauncherRequestReference'] 
slug: /tools/sdk/powershell/v2025/models/launcher-request-reference
tags: ['SDK', 'Software Development Kit', 'LauncherRequestReference', 'V2025LauncherRequestReference']
---


# LauncherRequestReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW" ] | Type of Launcher reference | [required]
**Id** | **String** | ID of Launcher reference | [required]

## Examples

- Prepare the resource
```powershell
$LauncherRequestReference = Initialize-V2025LauncherRequestReference  -Type WORKFLOW `
 -Id 2fd6ff94-2081-4d29-acbc-83a0a2f744a5
```

- Convert the resource to JSON
```powershell
$LauncherRequestReference | ConvertTo-JSON
```


[[Back to top]](#) 

