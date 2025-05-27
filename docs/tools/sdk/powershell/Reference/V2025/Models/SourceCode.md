---
id: v2025-source-code
title: SourceCode
pagination_label: SourceCode
sidebar_label: SourceCode
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceCode', 'V2025SourceCode'] 
slug: /tools/sdk/powershell/v2025/models/source-code
tags: ['SDK', 'Software Development Kit', 'SourceCode', 'V2025SourceCode']
---


# SourceCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | the version of the code | [required]
**Script** | **String** | The code | [required]

## Examples

- Prepare the resource
```powershell
$SourceCode = Initialize-V2025SourceCode  -Version 1.0 `
 -Script return "Mr. " + firstName;
```

- Convert the resource to JSON
```powershell
$SourceCode | ConvertTo-JSON
```


[[Back to top]](#) 

