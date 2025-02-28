---
id: role-document-all-of-entitlements1
title: RoleDocumentAllOfEntitlements1
pagination_label: RoleDocumentAllOfEntitlements1
sidebar_label: RoleDocumentAllOfEntitlements1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleDocumentAllOfEntitlements1', 'RoleDocumentAllOfEntitlements1'] 
slug: /tools/sdk/powershell/v3/models/role-document-all-of-entitlements1
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfEntitlements1', 'RoleDocumentAllOfEntitlements1']
---


# RoleDocumentAllOfEntitlements1

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
**SourceSchemaObjectType** | **String** | Schema objectType. | [optional] 
**Hash** | **String** | Read-only calculated hash value of an entitlement. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleDocumentAllOfEntitlements1 = Initialize-PSSailpoint.V3RoleDocumentAllOfEntitlements1  -HasPermissions false `
 -Description Cloud engineering `
 -Attribute memberOf `
 -Value CN=Cloud Engineering,DC=sailpoint,DC=COM `
 -Schema group `
 -Privileged false `
 -Id 2c918084575812550157589064f33b89 `
 -Name CN=Cloud Engineering,DC=sailpoint,DC=COM `
 -SourceSchemaObjectType group `
 -Hash c6fab95235584cca98a454a2f51e5683bc77d6a0
```

- Convert the resource to JSON
```powershell
$RoleDocumentAllOfEntitlements1 | ConvertTo-JSON
```


[[Back to top]](#) 

