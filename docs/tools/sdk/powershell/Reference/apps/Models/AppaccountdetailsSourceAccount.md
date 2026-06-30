---
id: appaccountdetails-source-account
title: AppaccountdetailsSourceAccount
pagination_label: AppaccountdetailsSourceAccount
sidebar_label: AppaccountdetailsSourceAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AppaccountdetailsSourceAccount', 'AppaccountdetailsSourceAccount'] 
slug: /tools/sdk/powershell/apps/models/appaccountdetails-source-account
tags: ['SDK', 'Software Development Kit', 'AppaccountdetailsSourceAccount', 'AppaccountdetailsSourceAccount']
---


# AppaccountdetailsSourceAccount

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
$AppaccountdetailsSourceAccount = Initialize-AppaccountdetailsSourceAccount  -Id fbf4f72280304f1a8bc808fc2a3bcf7b `
 -NativeIdentity CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com `
 -DisplayName Abby Smith `
 -SourceId 10efa58ea3954883b52bf74f489ce8f9 `
 -SourceDisplayName ODS-AD-SOURCE
```

- Convert the resource to JSON
```powershell
$AppaccountdetailsSourceAccount | ConvertTo-JSON
```


[[Back to top]](#) 

