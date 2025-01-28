---
id: bound
title: Bound
pagination_label: Bound
sidebar_label: Bound
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bound'] 
slug: /tools/sdk/powershell/v3/models/bound
tags: ['SDK', 'Software Development Kit', 'Bound']
---


# Bound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** |  **String** | The value of the range's endpoint. | [required]
**Inclusive** |  Pointer to **Boolean** | Indicates if the endpoint is included in the range. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Bound = Initialize-PSSailpoint.V3Bound  -Value 1 `
 -Inclusive false
```

- Convert the resource to JSON
```powershell
$Bound | ConvertTo-JSON
```


[[Back to top]](#) 

