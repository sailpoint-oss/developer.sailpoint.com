---
id: beta-source-code
title: SourceCode
pagination_label: SourceCode
sidebar_label: SourceCode
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceCode', 'BetaSourceCode'] 
slug: /tools/sdk/powershell/beta/models/source-code
tags: ['SDK', 'Software Development Kit', 'SourceCode', 'BetaSourceCode']
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
$SourceCode = Initialize-PSSailpoint.BetaSourceCode  -Version 1.0 `
 -Script return &quot;Mr. &quot; + firstName;
```

- Convert the resource to JSON
```powershell
$SourceCode | ConvertTo-JSON
```


[[Back to top]](#) 

