---
id: user-app-source
title: UserAppSource
pagination_label: UserAppSource
sidebar_label: UserAppSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserAppSource'] 
slug: /tools/sdk/powershell/v2024/models/user-app-source
tags: ['SDK', 'Software Development Kit', 'UserAppSource']
---


# UserAppSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the source ID | [optional] 
**Type** |  Pointer to **String** | It will always be ""SOURCE"" | [optional] 
**Name** |  Pointer to **String** | the source name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppSource = Initialize-PSSailpoint.V2024UserAppSource  -Id 9870808a7190d06e01719938fcd20792 `
 -Type SOURCE `
 -Name test-source
```

- Convert the resource to JSON
```powershell
$UserAppSource | ConvertTo-JSON
```


[[Back to top]](#) 

