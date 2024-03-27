---
id: transform
title: Transform
pagination_label: Transform
sidebar_label: Transform
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Transform'] 
slug: /tools/sdk/powershell/beta/models/transform
tags: ['SDK', 'Software Development Kit', 'Transform']
---


# Transform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Unique name of this transform | 
**Type** |   **Enum** [  "accountAttribute",    "base64Decode",    "base64Encode",    "concat",    "conditional",    "dateCompare",    "dateFormat",    "dateMath",    "decomposeDiacriticalMarks",    "e164phone",    "firstValid",    "rule",    "identityAttribute",    "indexOf",    "iso3166",    "lastIndexOf",    "leftPad",    "lookup",    "lower",    "normalizeNames",    "randomAlphaNumeric",    "randomNumeric",    "reference",    "replaceAll",    "replace",    "rightPad",    "split",    "static",    "substring",    "trim",    "upper",    "usernameGenerator",    "uuid" ] | The type of transform operation | 
**Attributes** |  [**TransformAttributes**](transform-attributes) |  | 

## Examples

- Prepare the resource
```powershell
$Transform = Initialize-PSSailpointBetaTransform  -Name Timestamp To Date `
 -Type dateFormat `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$Transform | ConvertTo-JSON
```


[[Back to top]](#) 

