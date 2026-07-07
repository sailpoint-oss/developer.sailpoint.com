---
id: launcherrequest
title: Launcherrequest
pagination_label: Launcherrequest
sidebar_label: Launcherrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Launcherrequest', 'Launcherrequest'] 
slug: /tools/sdk/powershell/launchers/models/launcherrequest
tags: ['SDK', 'Software Development Kit', 'Launcherrequest', 'Launcherrequest']
---


# Launcherrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the Launcher, limited to 255 characters | [required]
**Description** | **String** | Description of the Launcher, limited to 2000 characters | [required]
**Type** |  **Enum** [  "INTERACTIVE_PROCESS" ] | Launcher type | [required]
**Disabled** | **Boolean** | State of the Launcher | [required]
**Reference** | [**LauncherrequestReference**](launcherrequest-reference) |  | [optional] 
**Config** | **String** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [required]

## Examples

- Prepare the resource
```powershell
$Launcherrequest = Initialize-Launcherrequest  -Name Group Create `
 -Description Create a new Active Directory Group `
 -Type INTERACTIVE_PROCESS `
 -Disabled false `
 -Reference null `
 -Config {"workflowId" : "6b42d9be-61b6-46af-827e-ea29ba8aa3d9"}
```

- Convert the resource to JSON
```powershell
$Launcherrequest | ConvertTo-JSON
```


[[Back to top]](#) 

