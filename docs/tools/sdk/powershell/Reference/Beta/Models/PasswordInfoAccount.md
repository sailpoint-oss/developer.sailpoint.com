---
id: beta-password-info-account
title: PasswordInfoAccount
pagination_label: PasswordInfoAccount
sidebar_label: PasswordInfoAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordInfoAccount', 'BetaPasswordInfoAccount'] 
slug: /tools/sdk/powershell/beta/models/password-info-account
tags: ['SDK', 'Software Development Kit', 'PasswordInfoAccount', 'BetaPasswordInfoAccount']
---


# PasswordInfoAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | **String** | Account ID of the account. This is specified per account schema in the source configuration. It is used to distinguish accounts. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-ID-for-a/ta-p/80350 | [optional] 
**AccountName** | **String** | Display name of the account. This is specified per account schema in the source configuration. It is used to display name of the account. More info can be found here https://community.sailpoint.com/t5/IdentityNow-Connectors/How-do-I-designate-an-account-attribute-as-the-Account-Name-for/ta-p/74008 | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordInfoAccount = Initialize-PSSailpoint.BetaPasswordInfoAccount  -AccountId CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com `
 -AccountName Abby.Smith
```

- Convert the resource to JSON
```powershell
$PasswordInfoAccount | ConvertTo-JSON
```


[[Back to top]](#) 

