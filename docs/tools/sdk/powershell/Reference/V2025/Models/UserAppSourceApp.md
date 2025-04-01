---
id: v2025-user-app-source-app
title: UserAppSourceApp
pagination_label: UserAppSourceApp
sidebar_label: UserAppSourceApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserAppSourceApp', 'V2025UserAppSourceApp'] 
slug: /tools/sdk/powershell/v2025/models/user-app-source-app
tags: ['SDK', 'Software Development Kit', 'UserAppSourceApp', 'V2025UserAppSourceApp']
---


# UserAppSourceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the source app ID | [optional] 
**Type** | **String** | It will always be ""APPLICATION"" | [optional] 
**Name** | **String** | the source app name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppSourceApp = Initialize-PSSailpoint.V2025UserAppSourceApp  -Id edcb0951812949d085b60cd8bf35bc78 `
 -Type APPLICATION `
 -Name test-app
```

- Convert the resource to JSON
```powershell
$UserAppSourceApp | ConvertTo-JSON
```


[[Back to top]](#) 

