---
id: beta-user-app-account
title: UserAppAccount
pagination_label: UserAppAccount
sidebar_label: UserAppAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserAppAccount', 'BetaUserAppAccount'] 
slug: /tools/sdk/powershell/beta/models/user-app-account
tags: ['SDK', 'Software Development Kit', 'UserAppAccount', 'BetaUserAppAccount']
---


# UserAppAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the account ID | [optional] 
**Type** |  Pointer to **String** | It will always be ""ACCOUNT"" | [optional] 
**Name** |  Pointer to **String** | the account name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppAccount = Initialize-PSSailpoint.BetaUserAppAccount  -Id 85d173e7d57e496569df763231d6deb6a `
 -Type ACCOUNT `
 -Name test account
```

- Convert the resource to JSON
```powershell
$UserAppAccount | ConvertTo-JSON
```


[[Back to top]](#) 

