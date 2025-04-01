---
id: v2025-result
title: Result
pagination_label: Result
sidebar_label: Result
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Result', 'V2025Result'] 
slug: /tools/sdk/powershell/v2025/models/result
tags: ['SDK', 'Software Development Kit', 'Result', 'V2025Result']
---


# Result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **String** | Request result status | [optional] 

## Examples

- Prepare the resource
```powershell
$Result = Initialize-PSSailpoint.V2025Result  -Status Manual Task Created
```

- Convert the resource to JSON
```powershell
$Result | ConvertTo-JSON
```


[[Back to top]](#) 

