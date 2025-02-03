---
id: beta-launcher-request
title: LauncherRequest
pagination_label: LauncherRequest
sidebar_label: LauncherRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LauncherRequest', 'BetaLauncherRequest'] 
slug: /tools/sdk/powershell/beta/models/launcher-request
tags: ['SDK', 'Software Development Kit', 'LauncherRequest', 'BetaLauncherRequest']
---


# LauncherRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Name of the Launcher, limited to 255 characters | [required]
**Description** |  **String** | Description of the Launcher, limited to 2000 characters | [required]
**Type** |   **Enum** [  "INTERACTIVE_PROCESS" ] | Launcher type | [required]
**Disabled** |  **Boolean** | State of the Launcher | [required]
**Reference** |  Pointer to [**LauncherRequestReference**](launcher-request-reference) |  | [optional] 
**Config** |  **String** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [required]

## Examples

- Prepare the resource
```powershell
$LauncherRequest = Initialize-PSSailpoint.BetaLauncherRequest  -Name Group Create `
 -Description Create a new Active Directory Group `
 -Type INTERACTIVE_PROCESS `
 -Disabled false `
 -Reference null `
 -Config {&quot;workflowId&quot; : &quot;6b42d9be-61b6-46af-827e-ea29ba8aa3d9&quot;}
```

- Convert the resource to JSON
```powershell
$LauncherRequest | ConvertTo-JSON
```


[[Back to top]](#) 

