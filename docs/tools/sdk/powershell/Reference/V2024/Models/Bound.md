---
id: v2024-bound
title: Bound
pagination_label: Bound
sidebar_label: Bound
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bound', 'V2024Bound'] 
slug: /tools/sdk/powershell/v2024/models/bound
tags: ['SDK', 'Software Development Kit', 'Bound', 'V2024Bound']
---


# Bound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The value of the range's endpoint. | [required]
**Inclusive** | **Boolean** | Indicates if the endpoint is included in the range. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Bound = Initialize-V2024Bound  -Value 1 `
 -Inclusive false
```

- Convert the resource to JSON
```powershell
$Bound | ConvertTo-JSON
```


[[Back to top]](#) 

