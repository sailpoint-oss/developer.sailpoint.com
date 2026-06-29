---
id: passwordpolicyholdersdtoattributes-identity-attr-inner
title: PasswordpolicyholdersdtoattributesIdentityAttrInner
pagination_label: PasswordpolicyholdersdtoattributesIdentityAttrInner
sidebar_label: PasswordpolicyholdersdtoattributesIdentityAttrInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordpolicyholdersdtoattributesIdentityAttrInner', 'PasswordpolicyholdersdtoattributesIdentityAttrInner'] 
slug: /tools/sdk/powershell/sources/models/passwordpolicyholdersdtoattributes-identity-attr-inner
tags: ['SDK', 'Software Development Kit', 'PasswordpolicyholdersdtoattributesIdentityAttrInner', 'PasswordpolicyholdersdtoattributesIdentityAttrInner']
---


# PasswordpolicyholdersdtoattributesIdentityAttrInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Attribute's name | [optional] 
**Value** | **String** | Attribute's value | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordpolicyholdersdtoattributesIdentityAttrInner = Initialize-PasswordpolicyholdersdtoattributesIdentityAttrInner  -Name Country `
 -Value Canada
```

- Convert the resource to JSON
```powershell
$PasswordpolicyholdersdtoattributesIdentityAttrInner | ConvertTo-JSON
```


[[Back to top]](#) 

