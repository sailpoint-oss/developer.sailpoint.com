---
id: base-entitlement
title: BaseEntitlement
pagination_label: BaseEntitlement
sidebar_label: BaseEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseEntitlement', 'BaseEntitlement'] 
slug: /tools/sdk/powershell/v3/models/base-entitlement
tags: ['SDK', 'Software Development Kit', 'BaseEntitlement', 'BaseEntitlement']
---


# BaseEntitlement

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
$BaseEntitlement = Initialize-PSSailpoint.V3BaseEntitlement  -HasPermissions false `
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
$BaseEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

