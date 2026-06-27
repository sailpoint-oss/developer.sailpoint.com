---
id: passwordpolicyholdersdto-inner
title: PasswordpolicyholdersdtoInner
pagination_label: PasswordpolicyholdersdtoInner
sidebar_label: PasswordpolicyholdersdtoInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordpolicyholdersdtoInner', 'PasswordpolicyholdersdtoInner'] 
slug: /tools/sdk/powershell/sources/models/passwordpolicyholdersdto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordpolicyholdersdtoInner', 'PasswordpolicyholdersdtoInner']
---


# PasswordpolicyholdersdtoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | **String** | The password policy Id. | [optional] 
**PolicyName** | **String** | The name of the password policy. | [optional] 
**Selectors** | [**Passwordpolicyholdersdtoattributes**](passwordpolicyholdersdtoattributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordpolicyholdersdtoInner = Initialize-PasswordpolicyholdersdtoInner  -PolicyId 2c91808e7d976f3b017d9f5ceae440c8 `
 -PolicyName PasswordPolicy Example `
 -Selectors null
```

- Convert the resource to JSON
```powershell
$PasswordpolicyholdersdtoInner | ConvertTo-JSON
```


[[Back to top]](#) 

