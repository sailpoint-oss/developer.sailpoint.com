---
id: beta-source-account-deleted
title: SourceAccountDeleted
pagination_label: SourceAccountDeleted
sidebar_label: SourceAccountDeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAccountDeleted', 'BetaSourceAccountDeleted'] 
slug: /tools/sdk/powershell/beta/models/source-account-deleted
tags: ['SDK', 'Software Development Kit', 'SourceAccountDeleted', 'BetaSourceAccountDeleted']
---


# SourceAccountDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **String** | Identity's universal unique identifier (UUID) on the source. The source system generates the UUID. | [required]
**Id** | **String** | SailPoint generated unique identifier. | [required]
**NativeIdentifier** | **String** | Account's unique ID on the source. | [required]
**SourceId** | **String** | Source ID. | [required]
**SourceName** | **String** | Source name. | [required]
**IdentityId** | **String** | ID of the identity correlated with the account. | [required]
**IdentityName** | **String** | Name of the identity correlated with the account. | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Account attributes. The attributes' contents depend on the source's account schema. | [required]

## Examples

- Prepare the resource
```powershell
$SourceAccountDeleted = Initialize-BetaSourceAccountDeleted  -Uuid b7264868-7201-415f-9118-b581d431c688 `
 -Id ee769173319b41d19ccec35ba52f237b `
 -NativeIdentifier E009 `
 -SourceId 2c918082814e693601816e09471b29b6 `
 -SourceName Active Directory `
 -IdentityId ee769173319b41d19ccec6c235423237b `
 -IdentityName john.doe `
 -Attributes {firstname=John, lastname=Doe, email=john.doe@gmail.com, department=Sales, displayName=John Doe, created=2020-04-27T16:48:33.597Z, employeeNumber=E009, uid=E009, inactive=true, phone=null, identificationNumber=E009}
```

- Convert the resource to JSON
```powershell
$SourceAccountDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

