---
id: v2024-launcher
title: Launcher
pagination_label: Launcher
sidebar_label: Launcher
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Launcher', 'V2024Launcher'] 
slug: /tools/sdk/powershell/v2024/models/launcher
tags: ['SDK', 'Software Development Kit', 'Launcher', 'V2024Launcher']
---


# Launcher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the Launcher | [required]
**Created** | **System.DateTime** | Date the Launcher was created | [required]
**Modified** | **System.DateTime** | Date the Launcher was last modified | [required]
**Owner** | [**LauncherOwner**](launcher-owner) |  | [required]
**Name** | **String** | Name of the Launcher, limited to 255 characters | [required]
**Description** | **String** | Description of the Launcher, limited to 2000 characters | [required]
**Type** |  **Enum** [  "INTERACTIVE_PROCESS" ] | Launcher type | [required]
**Disabled** | **Boolean** | State of the Launcher | [required]
**Reference** | [**LauncherReference**](launcher-reference) |  | [optional] 
**Config** | **String** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [required]

## Examples

- Prepare the resource
```powershell
$Launcher = Initialize-V2024Launcher  -Id 1b630bed-0941-4792-a712-57a5868ca34d `
 -Created 2024-04-16T20:07:30.601016489Z `
 -Modified 2024-04-17T18:02:07.320143194Z `
 -Owner null `
 -Name Group Create `
 -Description Create a new Active Directory Group `
 -Type INTERACTIVE_PROCESS `
 -Disabled false `
 -Reference null `
 -Config {"workflowId" : "6b42d9be-61b6-46af-827e-ea29ba8aa3d9"}
```

- Convert the resource to JSON
```powershell
$Launcher | ConvertTo-JSON
```


[[Back to top]](#) 

