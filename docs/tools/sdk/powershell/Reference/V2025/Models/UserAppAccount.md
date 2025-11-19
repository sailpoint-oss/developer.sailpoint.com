---
id: v2025-user-app-account
title: UserAppAccount
pagination_label: UserAppAccount
sidebar_label: UserAppAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserAppAccount', 'V2025UserAppAccount'] 
slug: /tools/sdk/powershell/v2025/models/user-app-account
tags: ['SDK', 'Software Development Kit', 'UserAppAccount', 'V2025UserAppAccount']
---


# UserAppAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the account ID | [optional] 
**Type** | **String** | It will always be ""ACCOUNT"" | [optional] 
**Name** | **String** | the account name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserAppAccount = Initialize-V2025UserAppAccount  -Id 85d173e7d57e496569df763231d6deb6a `
 -Type ACCOUNT `
 -Name test account
```

- Convert the resource to JSON
```powershell
$UserAppAccount | ConvertTo-JSON
```


[[Back to top]](#) 

