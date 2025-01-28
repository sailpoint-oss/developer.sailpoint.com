---
id: auth-user
title: AuthUser
pagination_label: AuthUser
sidebar_label: AuthUser
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthUser', 'AuthUser'] 
slug: /tools/sdk/powershell/v3/models/auth-user
tags: ['SDK', 'Software Development Kit', 'AuthUser', 'AuthUser']
---


# AuthUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** |  Pointer to **String** | Tenant name. | [optional] 
**Id** |  Pointer to **String** | Identity ID. | [optional] 
**Uid** |  Pointer to **String** | Identity's unique identitifier. | [optional] 
**VarProfile** |  Pointer to **String** | ID of the auth profile associated with the auth user. | [optional] 
**IdentificationNumber** |  Pointer to **String** | Auth user's employee number. | [optional] 
**Email** |  Pointer to **String** | Auth user's email. | [optional] 
**Phone** |  Pointer to **String** | Auth user's phone number. | [optional] 
**WorkPhone** |  Pointer to **String** | Auth user's work phone number. | [optional] 
**PersonalEmail** |  Pointer to **String** | Auth user's personal email. | [optional] 
**Firstname** |  Pointer to **String** | Auth user's first name. | [optional] 
**Lastname** |  Pointer to **String** | Auth user's last name. | [optional] 
**DisplayName** |  Pointer to **String** | Auth user's name in displayed format. | [optional] 
**Alias** |  Pointer to **String** | Auth user's alias. | [optional] 
**LastPasswordChangeDate** |  Pointer to **String** | Date of last password change. | [optional] 
**LastLoginTimestamp** |  Pointer to **Int64** | Timestamp of the last login (long type value). | [optional] 
**CurrentLoginTimestamp** |  Pointer to **Int64** | Timestamp of the current login (long type value). | [optional] 
**Capabilities** |  Pointer to **[]String** | Array of the auth user's capabilities. | [optional] 

## Examples

- Prepare the resource
```powershell
$AuthUser = Initialize-PSSailpoint.V3AuthUser  -Tenant test-tenant `
 -Id 2c91808458ae7a4f0158b1bbf8af0628 `
 -Uid will.smith `
 -VarProfile 2c91808458ae7a4f0158b1bbf8af0756 `
 -IdentificationNumber 19-5588452 `
 -Email william.smith@example.com `
 -Phone 5555555555 `
 -WorkPhone 5555555555 `
 -PersonalEmail william.smith@example.com `
 -Firstname Will `
 -Lastname Smith `
 -DisplayName Will Smith `
 -Alias will.smith `
 -LastPasswordChangeDate 2021-03-08T22:37:33.901Z `
 -LastLoginTimestamp 1656327185832 `
 -CurrentLoginTimestamp 1656327185832 `
 -Capabilities null
```

- Convert the resource to JSON
```powershell
$AuthUser | ConvertTo-JSON
```


[[Back to top]](#) 

