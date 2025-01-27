---
id: target
title: Target
pagination_label: Target
sidebar_label: Target
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Target'] 
slug: /tools/sdk/powershell/v2024/models/target
tags: ['SDK', 'Software Development Kit', 'Target']
---


# Target

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Target ID | [optional] 
**Type** |  Pointer to  **Enum** [  "APPLICATION",    "IDENTITY" ] | Target type | [optional] 
**Name** |  Pointer to **String** | Target name | [optional] 

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

