---
id: start-launcher-v1200-response
title: StartLauncherV1200Response
pagination_label: StartLauncherV1200Response
sidebar_label: StartLauncherV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartLauncherV1200Response', 'StartLauncherV1200Response'] 
slug: /tools/sdk/powershell/launchers/models/start-launcher-v1200-response
tags: ['SDK', 'Software Development Kit', 'StartLauncherV1200Response', 'StartLauncherV1200Response']
---


# StartLauncherV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InteractiveProcessId** | **String** | ID of the Interactive Process that was launched | [required]

## Examples

- Prepare the resource
```powershell
$StartLauncherV1200Response = Initialize-StartLauncherV1200Response  -InteractiveProcessId 5da68cfe-2d60-4b09-858f-0d03acd2f47a
```

- Convert the resource to JSON
```powershell
$StartLauncherV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

