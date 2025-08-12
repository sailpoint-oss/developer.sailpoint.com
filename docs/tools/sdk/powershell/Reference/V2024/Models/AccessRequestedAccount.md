---
id: v2024-access-requested-account
title: AccessRequestedAccount
pagination_label: AccessRequestedAccount
sidebar_label: AccessRequestedAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestedAccount', 'V2024AccessRequestedAccount'] 
slug: /tools/sdk/powershell/v2024/models/access-requested-account
tags: ['SDK', 'Software Development Kit', 'AccessRequestedAccount', 'V2024AccessRequestedAccount']
---


# AccessRequestedAccount

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
$AccessRequestedAccount = Initialize-V2024AccessRequestedAccount  -Id 2c91808a77ff216301782327a50f09bf `
 -NativeIdentity dr.arden.ogahn.d `
 -DisplayName Adam Archer `
 -SourceId 8a80828f643d484f01643e14202e206f `
 -SourceName JDBC Entitlements Source `
 -EntitlementCount 2 `
 -AccessType account
```

- Convert the resource to JSON
```powershell
$AccessRequestedAccount | ConvertTo-JSON
```


[[Back to top]](#) 

