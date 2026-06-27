---
id: userapp-source
title: UserappSource
pagination_label: UserappSource
sidebar_label: UserappSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserappSource', 'UserappSource'] 
slug: /tools/sdk/powershell/apps/models/userapp-source
tags: ['SDK', 'Software Development Kit', 'UserappSource', 'UserappSource']
---


# UserappSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the source ID | [optional] 
**Type** | **String** | It will always be ""SOURCE"" | [optional] 
**Name** | **String** | the source name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserappSource = Initialize-UserappSource  -Id 9870808a7190d06e01719938fcd20792 `
 -Type SOURCE `
 -Name test-source
```

- Convert the resource to JSON
```powershell
$UserappSource | ConvertTo-JSON
```


[[Back to top]](#) 

