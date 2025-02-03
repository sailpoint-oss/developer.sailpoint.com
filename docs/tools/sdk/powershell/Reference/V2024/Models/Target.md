---
id: v2024-target
title: Target
pagination_label: Target
sidebar_label: Target
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Target', 'V2024Target'] 
slug: /tools/sdk/powershell/v2024/models/target
tags: ['SDK', 'Software Development Kit', 'Target', 'V2024Target']
---


# Target

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Target ID | [optional] 
**Type** |  **Enum** [  "APPLICATION",    "IDENTITY" ] | Target type | [optional] 
**Name** | **String** | Target name | [optional] 

## Examples

- Prepare the resource
```powershell
$Target = Initialize-PSSailpoint.V2024Target  -Id c6dc37bf508149b28ce5b7d90ca4bbf9 `
 -Type APPLICATION `
 -Name Active Directory [source]
```

- Convert the resource to JSON
```powershell
$Target | ConvertTo-JSON
```


[[Back to top]](#) 

