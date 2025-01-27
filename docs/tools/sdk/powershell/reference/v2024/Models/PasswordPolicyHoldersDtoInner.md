---
id: v2024-password-policy-holders-dto-inner
title: PasswordPolicyHoldersDtoInner
pagination_label: PasswordPolicyHoldersDtoInner
sidebar_label: PasswordPolicyHoldersDtoInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordPolicyHoldersDtoInner'] 
slug: /tools/sdk/powershell/v2024/models/password-policy-holders-dto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoInner']
---


# PasswordPolicyHoldersDtoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** |  Pointer to **String** | The password policy Id. | [optional] 
**PolicyName** |  Pointer to **String** | The name of the password policy. | [optional] 
**Selectors** |  Pointer to [**PasswordPolicyHoldersDtoAttributes**](password-policy-holders-dto-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordPolicyHoldersDtoInner = Initialize-PSSailpoint.V2024PasswordPolicyHoldersDtoInner  -PolicyId 2c91808e7d976f3b017d9f5ceae440c8 `
 -PolicyName PasswordPolicy Example `
 -Selectors {identityAttr&#x3D;[{name&#x3D;displayName, value&#x3D;Robert}, {name&#x3D;lastname, value&#x3D;Juice}]}
```

- Convert the resource to JSON
```powershell
$PasswordPolicyHoldersDtoInner | ConvertTo-JSON
```


[[Back to top]](#) 

