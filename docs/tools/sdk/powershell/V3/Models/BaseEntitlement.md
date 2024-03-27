---
id: base-entitlement
title: BaseEntitlement
pagination_label: BaseEntitlement
sidebar_label: BaseEntitlement
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseEntitlement'] 
slug: /tools/sdk/powershell/v3/models/base-entitlement
tags: ['SDK', 'Software Development Kit', 'BaseEntitlement']
---


# BaseEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasPermissions** |  Pointer to **Boolean** | Indicates whether the entitlement has permissions. | [optional] [default to $false]
**Description** |  Pointer to **String** | Entitlement&#39;s description. | [optional] 
**Attribute** |  Pointer to **String** | Entitlement attribute&#39;s name. | [optional] 
**Value** |  Pointer to **String** | Entitlement&#39;s value. | [optional] 
**Schema** |  Pointer to **String** | Entitlement&#39;s schema. | [optional] 
**Privileged** |  Pointer to **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**Id** |  Pointer to **String** | Entitlement&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | Entitlement&#39;s name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseEntitlement = Initialize-PSSailpointBaseEntitlement  -HasPermissions false `
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

