---
id: beta-start-launcher200-response
title: StartLauncher200Response
pagination_label: StartLauncher200Response
sidebar_label: StartLauncher200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartLauncher200Response'] 
slug: /tools/sdk/powershell/beta/models/start-launcher200-response
tags: ['SDK', 'Software Development Kit', 'StartLauncher200Response']
---


# StartLauncher200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InteractiveProcessId** |  **String** | ID of the Interactive Process that was launched | [required]

## Examples

- Prepare the resource
```powershell
$StartLauncher200Response = Initialize-PSSailpoint.BetaStartLauncher200Response  -InteractiveProcessId 5da68cfe-2d60-4b09-858f-0d03acd2f47a
```

- Convert the resource to JSON
```powershell
$StartLauncher200Response | ConvertTo-JSON
```


[[Back to top]](#) 

