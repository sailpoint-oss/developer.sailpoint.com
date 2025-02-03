---
id: v2024-account-status-changed-account
title: AccountStatusChangedAccount
pagination_label: AccountStatusChangedAccount
sidebar_label: AccountStatusChangedAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChangedAccount', 'V2024AccountStatusChangedAccount'] 
slug: /tools/sdk/powershell/v2024/models/account-status-changed-account
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedAccount', 'V2024AccountStatusChangedAccount']
---


# AccountStatusChangedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the ID of the account in the database | [optional] 
**NativeIdentity** | **String** | the native identifier of the account | [optional] 
**DisplayName** | **String** | the display name of the account | [optional] 
**SourceId** | **String** | the ID of the source for this account | [optional] 
**SourceName** | **String** | the name of the source for this account | [optional] 
**EntitlementCount** | **Int32** | the number of entitlements on this account | [optional] 
**AccessType** | **String** | this value is always ""account"" | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChangedAccount = Initialize-PSSailpoint.V2024AccountStatusChangedAccount  -Id null `
 -NativeIdentity null `
 -DisplayName null `
 -SourceId null `
 -SourceName null `
 -EntitlementCount null `
 -AccessType null
```

- Convert the resource to JSON
```powershell
$AccountStatusChangedAccount | ConvertTo-JSON
```


[[Back to top]](#) 

