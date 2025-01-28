---
id: base-account
title: BaseAccount
pagination_label: BaseAccount
sidebar_label: BaseAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseAccount', 'BaseAccount'] 
slug: /tools/sdk/powershell/v3/models/base-account
tags: ['SDK', 'Software Development Kit', 'BaseAccount', 'BaseAccount']
---


# BaseAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**AccountId** |  Pointer to **String** | Account ID. | [optional] 
**Source** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**Disabled** |  Pointer to **Boolean** | Indicates whether the account is disabled. | [optional] [default to $false]
**Locked** |  Pointer to **Boolean** | Indicates whether the account is locked. | [optional] [default to $false]
**Privileged** |  Pointer to **Boolean** | Indicates whether the account is privileged. | [optional] [default to $false]
**ManuallyCorrelated** |  Pointer to **Boolean** | Indicates whether the account has been manually correlated to an identity. | [optional] [default to $false]
**PasswordLastSet** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**EntitlementAttributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Map or dictionary of key/value pairs. | [optional] 
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccount = Initialize-PSSailpoint.V3BaseAccount  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -AccountId John.Doe `
 -Source null `
 -Disabled false `
 -Locked false `
 -Privileged false `
 -ManuallyCorrelated false `
 -PasswordLastSet 2018-06-25T20:22:28.104Z `
 -EntitlementAttributes {moderator&#x3D;true, admin&#x3D;true, trust_level&#x3D;4} `
 -Created 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$BaseAccount | ConvertTo-JSON
```


[[Back to top]](#) 

