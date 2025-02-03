---
id: v2024-base-entitlement
title: BaseEntitlement
pagination_label: BaseEntitlement
sidebar_label: BaseEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseEntitlement', 'V2024BaseEntitlement'] 
slug: /tools/sdk/powershell/v2024/models/base-entitlement
tags: ['SDK', 'Software Development Kit', 'BaseEntitlement', 'V2024BaseEntitlement']
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
$BaseEntitlement = Initialize-PSSailpoint.V2024BaseEntitlement  -HasPermissions false `
 -Description Cloud engineering `
 -Attribute memberOf `
 -Value CN&#x3D;Cloud Engineering,DC&#x3D;sailpoint,DC&#x3D;COM `
 -Schema group `
 -Privileged false `
 -Id 2c918084575812550157589064f33b89 `
 -Name CN&#x3D;Cloud Engineering,DC&#x3D;sailpoint,DC&#x3D;COM
```

- Convert the resource to JSON
```powershell
$BaseEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

