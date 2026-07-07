---
id: userapp-account
title: UserappAccount
pagination_label: UserappAccount
sidebar_label: UserappAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserappAccount', 'UserappAccount'] 
slug: /tools/sdk/powershell/apps/models/userapp-account
tags: ['SDK', 'Software Development Kit', 'UserappAccount', 'UserappAccount']
---


# UserappAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the account ID | [optional] 
**Type** | **String** | It will always be ""ACCOUNT"" | [optional] 
**Name** | **String** | the account name | [optional] 

## Examples

- Prepare the resource
```powershell
$UserappAccount = Initialize-UserappAccount  -Id 85d173e7d57e496569df763231d6deb6a `
 -Type ACCOUNT `
 -Name test account
```

- Convert the resource to JSON
```powershell
$UserappAccount | ConvertTo-JSON
```


[[Back to top]](#) 

