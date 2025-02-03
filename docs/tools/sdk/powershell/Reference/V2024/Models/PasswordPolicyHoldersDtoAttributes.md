---
id: v2024-password-policy-holders-dto-attributes
title: PasswordPolicyHoldersDtoAttributes
pagination_label: PasswordPolicyHoldersDtoAttributes
sidebar_label: PasswordPolicyHoldersDtoAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordPolicyHoldersDtoAttributes', 'V2024PasswordPolicyHoldersDtoAttributes'] 
slug: /tools/sdk/powershell/v2024/models/password-policy-holders-dto-attributes
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoAttributes', 'V2024PasswordPolicyHoldersDtoAttributes']
---


# PasswordPolicyHoldersDtoAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttr** | [**[]PasswordPolicyHoldersDtoAttributesIdentityAttrInner**](password-policy-holders-dto-attributes-identity-attr-inner) | Attributes of PasswordPolicyHoldersDto | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordPolicyHoldersDtoAttributes = Initialize-PSSailpoint.V2024PasswordPolicyHoldersDtoAttributes  -IdentityAttr null
```

- Convert the resource to JSON
```powershell
$PasswordPolicyHoldersDtoAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

