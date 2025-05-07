---
id: v2025-password-policy-v3-dto
title: PasswordPolicyV3Dto
pagination_label: PasswordPolicyV3Dto
sidebar_label: PasswordPolicyV3Dto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordPolicyV3Dto', 'V2025PasswordPolicyV3Dto'] 
slug: /tools/sdk/powershell/v2025/models/password-policy-v3-dto
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyV3Dto', 'V2025PasswordPolicyV3Dto']
---


# PasswordPolicyV3Dto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The password policy Id. | [optional] 
**Description** | **String** | Description for current password policy. | [optional] 
**Name** | **String** | The name of the password policy. | [optional] 
**DateCreated** | **Int64** | Date the Password Policy was created. | [optional] 
**LastUpdated** | **Int64** | Date the Password Policy was updated. | [optional] 
**FirstExpirationReminder** | **Int64** | The number of days before expiration remaninder. | [optional] 
**AccountIdMinWordLength** | **Int64** | The minimun length of account Id. By default is equals to -1. | [optional] 
**AccountNameMinWordLength** | **Int64** | The minimun length of account name. By default is equals to -1. | [optional] 
**MinAlpha** | **Int64** | Maximum alpha. By default is equals to 0. | [optional] 
**MinCharacterTypes** | **Int64** | MinCharacterTypes. By default is equals to -1. | [optional] 
**MaxLength** | **Int64** | Maximum length of the password. | [optional] 
**MinLength** | **Int64** | Minimum length of the password. By default is equals to 0. | [optional] 
**MaxRepeatedChars** | **Int64** | Maximum repetition of the same character in the password. By default is equals to -1. | [optional] 
**MinLower** | **Int64** | Minimum amount of lower case character in the password. By default is equals to 0. | [optional] 
**MinNumeric** | **Int64** | Minimum amount of numeric characters in the password. By default is equals to 0. | [optional] 
**MinSpecial** | **Int64** | Minimum amount of special symbols in the password. By default is equals to 0. | [optional] 
**MinUpper** | **Int64** | Minimum amount of upper case symbols in the password. By default is equals to 0. | [optional] 
**PasswordExpiration** | **Int64** | Number of days before current password expires. By default is equals to 90. | [optional] 
**DefaultPolicy** | **Boolean** | Defines whether this policy is default or not. Default policy is created automatically when an org is setup. This field is false by default. | [optional] [default to $false]
**EnablePasswdExpiration** | **Boolean** | Defines whether this policy is enabled to expire or not. This field is false by default. | [optional] [default to $false]
**RequireStrongAuthn** | **Boolean** | Defines whether this policy require strong Auth or not. This field is false by default. | [optional] [default to $false]
**RequireStrongAuthOffNetwork** | **Boolean** | Defines whether this policy require strong Auth of network or not. This field is false by default. | [optional] [default to $false]
**RequireStrongAuthUntrustedGeographies** | **Boolean** | Defines whether this policy require strong Auth for untrusted geographies. This field is false by default. | [optional] [default to $false]
**UseAccountAttributes** | **Boolean** | Defines whether this policy uses account attributes or not. This field is false by default. | [optional] [default to $false]
**UseDictionary** | **Boolean** | Defines whether this policy uses dictionary or not. This field is false by default. | [optional] [default to $false]
**UseIdentityAttributes** | **Boolean** | Defines whether this policy uses identity attributes or not. This field is false by default. | [optional] [default to $false]
**ValidateAgainstAccountId** | **Boolean** | Defines whether this policy validate against account id or not. This field is false by default. | [optional] [default to $false]
**ValidateAgainstAccountName** | **Boolean** | Defines whether this policy validate against account name or not. This field is false by default. | [optional] [default to $false]
**Created** | **String** |  | [optional] 
**Modified** | **String** |  | [optional] 
**SourceIds** | **[]String** | List of sources IDs managed by this password policy. | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordPolicyV3Dto = Initialize-V2025PasswordPolicyV3Dto  -Id 2c91808e7d976f3b017d9f5ceae440c8 `
 -Description Information about the Password Policy `
 -Name PasswordPolicy Example `
 -DateCreated 1639056206564 `
 -LastUpdated 1939056206564 `
 -FirstExpirationReminder 45 `
 -AccountIdMinWordLength 4 `
 -AccountNameMinWordLength 6 `
 -MinAlpha 5 `
 -MinCharacterTypes 5 `
 -MaxLength 25 `
 -MinLength 8 `
 -MaxRepeatedChars 3 `
 -MinLower 8 `
 -MinNumeric 8 `
 -MinSpecial 8 `
 -MinUpper 8 `
 -PasswordExpiration 8 `
 -DefaultPolicy true `
 -EnablePasswdExpiration true `
 -RequireStrongAuthn true `
 -RequireStrongAuthOffNetwork true `
 -RequireStrongAuthUntrustedGeographies true `
 -UseAccountAttributes false `
 -UseDictionary false `
 -UseIdentityAttributes false `
 -ValidateAgainstAccountId false `
 -ValidateAgainstAccountName true `
 -Created null `
 -Modified null `
 -SourceIds [2c91808382ffee0b01830de154f14034, 2f98808382ffee0b01830de154f12134]
```

- Convert the resource to JSON
```powershell
$PasswordPolicyV3Dto | ConvertTo-JSON
```


[[Back to top]](#) 

