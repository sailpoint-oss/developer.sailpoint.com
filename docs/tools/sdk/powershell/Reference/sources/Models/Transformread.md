---
id: transformread
title: Transformread
pagination_label: Transformread
sidebar_label: Transformread
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transformread', 'Transformread'] 
slug: /tools/sdk/powershell/sources/models/transformread
tags: ['SDK', 'Software Development Kit', 'Transformread', 'Transformread']
---


# Transformread

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Unique name of this transform | [required]
**Type** |  **Enum** [  "accountAttribute",    "base64Decode",    "base64Encode",    "concat",    "conditional",    "dateCompare",    "dateFormat",    "dateMath",    "decomposeDiacriticalMarks",    "e164phone",    "firstValid",    "rule",    "identityAttribute",    "indexOf",    "iso3166",    "lastIndexOf",    "leftPad",    "lookup",    "lower",    "normalizeNames",    "randomAlphaNumeric",    "randomNumeric",    "reference",    "replaceAll",    "replace",    "rightPad",    "split",    "static",    "substring",    "trim",    "upper",    "usernameGenerator",    "uuid",    "displayName",    "rfc5646" ] | The type of transform operation | [required]
**Attributes** | [**TransformAttributes**](transform-attributes) |  | [required]
**Id** | **String** | Unique ID of this transform | [required]
**Internal** | **Boolean** | Indicates whether this is an internal SailPoint-created transform or a customer-created transform | [required][default to $false]

## Examples

- Prepare the resource
```powershell
$Transformread = Initialize-Transformread  -Name Timestamp To Date `
 -Type dateFormat `
 -Attributes null `
 -Id 2cd78adghjkja34jh2b1hkjhasuecd `
 -Internal false
```

- Convert the resource to JSON
```powershell
$Transformread | ConvertTo-JSON
```


[[Back to top]](#) 

