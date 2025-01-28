---
id: beta-account-status-changed-account
title: AccountStatusChangedAccount
pagination_label: AccountStatusChangedAccount
sidebar_label: AccountStatusChangedAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChangedAccount', 'BetaAccountStatusChangedAccount'] 
slug: /tools/sdk/powershell/beta/models/account-status-changed-account
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedAccount', 'BetaAccountStatusChangedAccount']
---


# AccountStatusChangedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the ID of the account in the database | [optional] 
**NativeIdentity** |  Pointer to **String** | the native identifier of the account | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the account | [optional] 
**SourceId** |  Pointer to **String** | the ID of the source for this account | [optional] 
**SourceName** |  Pointer to **String** | the name of the source for this account | [optional] 
**EntitlementCount** |  Pointer to **Int32** | the number of entitlements on this account | [optional] 
**AccessType** |  Pointer to **String** | this value is always ""account"" | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChangedAccount = Initialize-PSSailpoint.BetaAccountStatusChangedAccount  -Id null `
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

