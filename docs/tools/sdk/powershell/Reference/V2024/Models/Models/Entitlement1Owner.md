---
id: v2024-entitlement1-owner
title: Entitlement1Owner
pagination_label: Entitlement1Owner
sidebar_label: Entitlement1Owner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement1Owner', 'V2024Entitlement1Owner'] 
slug: /tools/sdk/powershell/v2024/models/entitlement1-owner
tags: ['SDK', 'Software Development Kit', 'Entitlement1Owner', 'V2024Entitlement1Owner']
---


# Entitlement1Owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The owner id for the entitlement | [optional] 
**Name** |  Pointer to **String** | The owner name for the entitlement | [optional] 
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement1Owner = Initialize-PSSailpoint.V2024Entitlement1Owner  -Id 2a2fdacca5e345f18bf7970cfbb8fec2 `
 -Name identity 1 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$Entitlement1Owner | ConvertTo-JSON
```


[[Back to top]](#) 

