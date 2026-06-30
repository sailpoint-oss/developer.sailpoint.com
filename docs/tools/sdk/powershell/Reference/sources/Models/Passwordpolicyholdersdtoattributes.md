---
id: passwordpolicyholdersdtoattributes
title: Passwordpolicyholdersdtoattributes
pagination_label: Passwordpolicyholdersdtoattributes
sidebar_label: Passwordpolicyholdersdtoattributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passwordpolicyholdersdtoattributes', 'Passwordpolicyholdersdtoattributes'] 
slug: /tools/sdk/powershell/sources/models/passwordpolicyholdersdtoattributes
tags: ['SDK', 'Software Development Kit', 'Passwordpolicyholdersdtoattributes', 'Passwordpolicyholdersdtoattributes']
---


# Passwordpolicyholdersdtoattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttr** | [**[]PasswordpolicyholdersdtoattributesIdentityAttrInner**](passwordpolicyholdersdtoattributes-identity-attr-inner) | Attributes of PasswordPolicyHoldersDto | [optional] 

## Examples

- Prepare the resource
```powershell
$Passwordpolicyholdersdtoattributes = Initialize-Passwordpolicyholdersdtoattributes  -IdentityAttr null
```

- Convert the resource to JSON
```powershell
$Passwordpolicyholdersdtoattributes | ConvertTo-JSON
```


[[Back to top]](#) 

