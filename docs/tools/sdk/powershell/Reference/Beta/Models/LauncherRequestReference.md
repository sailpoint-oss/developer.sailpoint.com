---
id: beta-launcher-request-reference
title: LauncherRequestReference
pagination_label: LauncherRequestReference
sidebar_label: LauncherRequestReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LauncherRequestReference', 'BetaLauncherRequestReference'] 
slug: /tools/sdk/powershell/beta/models/launcher-request-reference
tags: ['SDK', 'Software Development Kit', 'LauncherRequestReference', 'BetaLauncherRequestReference']
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
$LauncherRequestReference = Initialize-BetaLauncherRequestReference  -Type WORKFLOW `
 -Id 2fd6ff94-2081-4d29-acbc-83a0a2f744a5
```

- Convert the resource to JSON
```powershell
$LauncherRequestReference | ConvertTo-JSON
```


[[Back to top]](#) 

