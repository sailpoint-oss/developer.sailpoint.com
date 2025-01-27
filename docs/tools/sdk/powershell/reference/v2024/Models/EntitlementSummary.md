---
id: v2024-entitlement-summary
title: EntitlementSummary
pagination_label: EntitlementSummary
sidebar_label: EntitlementSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementSummary'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-summary
tags: ['SDK', 'Software Development Kit', 'EntitlementSummary']
---


# EntitlementSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** |  Pointer to **String** |  | [optional] 
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Description** |  Pointer to **String** |  | [optional] 
**Source** |  Pointer to [**Reference1**](reference1) |  | [optional] 
**Privileged** |  Pointer to **Boolean** |  | [optional] 
**Attribute** |  Pointer to **String** |  | [optional] 
**Value** |  Pointer to **String** |  | [optional] 
**Standalone** |  Pointer to **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementSummary = Initialize-PSSailpoint.V2024EntitlementSummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Type null `
 -Description null `
 -Source null `
 -Privileged false `
 -Attribute memberOf `
 -Value CN&#x3D;Buyer,OU&#x3D;Groups,OU&#x3D;Demo,DC&#x3D;seri,DC&#x3D;sailpointdemo,DC&#x3D;com `
 -Standalone false
```

- Convert the resource to JSON
```powershell
$EntitlementSummary | ConvertTo-JSON
```


[[Back to top]](#) 

