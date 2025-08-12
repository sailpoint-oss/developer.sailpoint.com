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
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**AccountId** | **String** | Account ID. | [optional] 
**Source** | [**AccountSource**](account-source) |  | [optional] 
**Disabled** | **Boolean** | Indicates whether the account is disabled. | [optional] [default to $false]
**Locked** | **Boolean** | Indicates whether the account is locked. | [optional] [default to $false]
**Privileged** | **Boolean** | Indicates whether the account is privileged. | [optional] [default to $false]
**ManuallyCorrelated** | **Boolean** | Indicates whether the account has been manually correlated to an identity. | [optional] [default to $false]
**PasswordLastSet** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**EntitlementAttributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Map or dictionary of key/value pairs. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**SupportsPasswordChange** | **Boolean** | Indicates whether the account supports password change. | [optional] [default to $false]
**AccountAttributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Map or dictionary of key/value pairs. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccount = Initialize-BaseAccount  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -AccountId John.Doe `
 -Source null `
 -Disabled false `
 -Locked false `
 -Privileged false `
 -ManuallyCorrelated false `
 -PasswordLastSet 2018-06-25T20:22:28.104Z `
 -EntitlementAttributes {moderator=true, admin=true, trust_level=4} `
 -Created 2018-06-25T20:22:28.104Z `
 -SupportsPasswordChange false `
 -AccountAttributes {type=global, admin=true, trust_level=4}
```

- Convert the resource to JSON
```powershell
$BaseAccount | ConvertTo-JSON
```


[[Back to top]](#) 

