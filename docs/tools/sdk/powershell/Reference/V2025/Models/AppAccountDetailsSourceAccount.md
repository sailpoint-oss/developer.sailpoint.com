---
id: v2025-app-account-details-source-account
title: AppAccountDetailsSourceAccount
pagination_label: AppAccountDetailsSourceAccount
sidebar_label: AppAccountDetailsSourceAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AppAccountDetailsSourceAccount', 'V2025AppAccountDetailsSourceAccount'] 
slug: /tools/sdk/powershell/v2025/models/app-account-details-source-account
tags: ['SDK', 'Software Development Kit', 'AppAccountDetailsSourceAccount', 'V2025AppAccountDetailsSourceAccount']
---


# AppAccountDetailsSourceAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The account ID | [optional] 
**NativeIdentity** | **String** | The native identity of account | [optional] 
**DisplayName** | **String** | The display name of account | [optional] 
**SourceId** | **String** | The source ID of account | [optional] 
**SourceDisplayName** | **String** | The source name of account | [optional] 

## Examples

- Prepare the resource
```powershell
$AppAccountDetailsSourceAccount = Initialize-PSSailpoint.V2025AppAccountDetailsSourceAccount  -Id fbf4f72280304f1a8bc808fc2a3bcf7b `
 -NativeIdentity CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com `
 -DisplayName Abby Smith `
 -SourceId 10efa58ea3954883b52bf74f489ce8f9 `
 -SourceDisplayName ODS-AD-SOURCE
```

- Convert the resource to JSON
```powershell
$AppAccountDetailsSourceAccount | ConvertTo-JSON
```


[[Back to top]](#) 

