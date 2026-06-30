---
id: launcherrequest-reference
title: LauncherrequestReference
pagination_label: LauncherrequestReference
sidebar_label: LauncherrequestReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LauncherrequestReference', 'LauncherrequestReference'] 
slug: /tools/sdk/powershell/launchers/models/launcherrequest-reference
tags: ['SDK', 'Software Development Kit', 'LauncherrequestReference', 'LauncherrequestReference']
---


# LauncherrequestReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW" ] | Type of Launcher reference | [required]
**Id** | **String** | ID of Launcher reference | [required]

## Examples

- Prepare the resource
```powershell
$LauncherrequestReference = Initialize-LauncherrequestReference  -Type WORKFLOW `
 -Id 2fd6ff94-2081-4d29-acbc-83a0a2f744a5
```

- Convert the resource to JSON
```powershell
$LauncherrequestReference | ConvertTo-JSON
```


[[Back to top]](#) 

