---
id: beta-user-app-source-app
title: UserAppSourceApp
pagination_label: UserAppSourceApp
sidebar_label: UserAppSourceApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserAppSourceApp', 'BetaUserAppSourceApp'] 
slug: /tools/sdk/powershell/beta/models/user-app-source-app
tags: ['SDK', 'Software Development Kit', 'UserAppSourceApp', 'BetaUserAppSourceApp']
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
$UserAppSourceApp = Initialize-PSSailpoint.BetaUserAppSourceApp  -Id edcb0951812949d085b60cd8bf35bc78 `
 -Type APPLICATION `
 -Name test-app
```

- Convert the resource to JSON
```powershell
$UserAppSourceApp | ConvertTo-JSON
```


[[Back to top]](#) 

