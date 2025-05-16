---
id: v2025-user-app-source
title: UserAppSource
pagination_label: UserAppSource
sidebar_label: UserAppSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserAppSource', 'V2025UserAppSource'] 
slug: /tools/sdk/powershell/v2025/models/user-app-source
tags: ['SDK', 'Software Development Kit', 'UserAppSource', 'V2025UserAppSource']
---


# UserAppSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the source ID | [optional] 
**Type** | **String** | It will always be ""SOURCE"" | [optional] 
**Name** | **String** | the source name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppSource = Initialize-V2025UserAppSource  -Id 9870808a7190d06e01719938fcd20792 `
 -Type SOURCE `
 -Name test-source
```

- Convert the resource to JSON
```powershell
$UserAppSource | ConvertTo-JSON
```


[[Back to top]](#) 

