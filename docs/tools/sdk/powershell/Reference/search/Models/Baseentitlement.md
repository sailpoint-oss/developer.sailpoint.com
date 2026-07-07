---
id: baseentitlement
title: Baseentitlement
pagination_label: Baseentitlement
sidebar_label: Baseentitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Baseentitlement', 'Baseentitlement'] 
slug: /tools/sdk/powershell/search/models/baseentitlement
tags: ['SDK', 'Software Development Kit', 'Baseentitlement', 'Baseentitlement']
---


# Baseentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasPermissions** | **Boolean** | Indicates whether the entitlement has permissions. | [optional] [default to $false]
**Description** | **String** | Entitlement's description. | [optional] 
**Attribute** | **String** | Entitlement attribute's name. | [optional] 
**Value** | **String** | Entitlement's value. | [optional] 
**Schema** | **String** | Entitlement's schema. | [optional] 
**Privileged** | **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**Id** | **String** | Entitlement's ID. | [optional] 
**Name** | **String** | Entitlement's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Baseentitlement = Initialize-Baseentitlement  -HasPermissions false `
 -Description Cloud engineering `
 -Attribute memberOf `
 -Value CN=Cloud Engineering,DC=sailpoint,DC=COM `
 -Schema group `
 -Privileged false `
 -Id 2c918084575812550157589064f33b89 `
 -Name CN=Cloud Engineering,DC=sailpoint,DC=COM
```

- Convert the resource to JSON
```powershell
$Baseentitlement | ConvertTo-JSON
```


[[Back to top]](#) 

