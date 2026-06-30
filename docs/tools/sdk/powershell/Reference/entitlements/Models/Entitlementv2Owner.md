---
id: entitlementv2-owner
title: Entitlementv2Owner
pagination_label: Entitlementv2Owner
sidebar_label: Entitlementv2Owner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementv2Owner', 'Entitlementv2Owner'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementv2-owner
tags: ['SDK', 'Software Development Kit', 'Entitlementv2Owner', 'Entitlementv2Owner']
---


# Entitlementv2Owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Name** | **String** | The display name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementv2Owner = Initialize-Entitlementv2Owner  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type IDENTITY `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$Entitlementv2Owner | ConvertTo-JSON
```


[[Back to top]](#) 

