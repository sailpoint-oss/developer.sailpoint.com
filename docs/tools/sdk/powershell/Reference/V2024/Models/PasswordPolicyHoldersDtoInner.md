---
id: v2024-password-policy-holders-dto-inner
title: PasswordPolicyHoldersDtoInner
pagination_label: PasswordPolicyHoldersDtoInner
sidebar_label: PasswordPolicyHoldersDtoInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordPolicyHoldersDtoInner', 'V2024PasswordPolicyHoldersDtoInner'] 
slug: /tools/sdk/powershell/v2024/models/password-policy-holders-dto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoInner', 'V2024PasswordPolicyHoldersDtoInner']
---


# PasswordPolicyHoldersDtoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | **String** | The password policy Id. | [optional] 
**PolicyName** | **String** | The name of the password policy. | [optional] 
**Selectors** | [**PasswordPolicyHoldersDtoAttributes**](password-policy-holders-dto-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordPolicyHoldersDtoInner = Initialize-V2024PasswordPolicyHoldersDtoInner  -PolicyId 2c91808e7d976f3b017d9f5ceae440c8 `
 -PolicyName PasswordPolicy Example `
 -Selectors {identityAttr=[{name=displayName, value=Robert}, {name=lastname, value=Juice}]}
```

- Convert the resource to JSON
```powershell
$PasswordPolicyHoldersDtoInner | ConvertTo-JSON
```


[[Back to top]](#) 

