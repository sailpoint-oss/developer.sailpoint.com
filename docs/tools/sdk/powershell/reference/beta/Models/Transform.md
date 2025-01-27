---
id: beta-transform
title: Transform
pagination_label: Transform
sidebar_label: Transform
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transform'] 
slug: /tools/sdk/powershell/beta/models/transform
tags: ['SDK', 'Software Development Kit', 'Transform']
---


# Transform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Unique name of this transform | [required]
**Type** |   **Enum** [  "accountAttribute",    "base64Decode",    "base64Encode",    "concat",    "conditional",    "dateCompare",    "dateFormat",    "dateMath",    "decomposeDiacriticalMarks",    "e164phone",    "firstValid",    "rule",    "identityAttribute",    "indexOf",    "iso3166",    "lastIndexOf",    "leftPad",    "lookup",    "lower",    "normalizeNames",    "randomAlphaNumeric",    "randomNumeric",    "reference",    "replaceAll",    "replace",    "rightPad",    "split",    "static",    "substring",    "trim",    "upper",    "usernameGenerator",    "uuid",    "displayName",    "rfc5646" ] | The type of transform operation | [required]
**Attributes** |  [**TransformAttributes**](transform-attributes) |  | [required]

## Examples

- Prepare the resource
```powershell
$Transform = Initialize-PSSailpoint.BetaTransform  -Name Timestamp To Date `
 -Type dateFormat `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$Transform | ConvertTo-JSON
```


[[Back to top]](#) 

