---
id: beta-accounts-async-result
title: AccountsAsyncResult
pagination_label: AccountsAsyncResult
sidebar_label: AccountsAsyncResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsAsyncResult', 'BetaAccountsAsyncResult'] 
slug: /tools/sdk/powershell/beta/models/accounts-async-result
tags: ['SDK', 'Software Development Kit', 'AccountsAsyncResult', 'BetaAccountsAsyncResult']
---


# AccountsAsyncResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | id of the task | [required]

## Examples

- Prepare the resource
```powershell
$AccountsAsyncResult = Initialize-PSSailpoint.BetaAccountsAsyncResult  -Id 2c91808474683da6017468693c260195
```

- Convert the resource to JSON
```powershell
$AccountsAsyncResult | ConvertTo-JSON
```


[[Back to top]](#) 

