---
id: v2024-entitlement-summary
title: EntitlementSummary
pagination_label: EntitlementSummary
sidebar_label: EntitlementSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementSummary', 'V2024EntitlementSummary'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-summary
tags: ['SDK', 'Software Development Kit', 'EntitlementSummary', 'V2024EntitlementSummary']
---


# EntitlementSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Description** | **String** |  | [optional] 
**Source** | [**Reference1**](reference1) |  | [optional] 
**Privileged** | **Boolean** |  | [optional] 
**Attribute** | **String** |  | [optional] 
**Value** | **String** |  | [optional] 
**Standalone** | **Boolean** |  | [optional] 

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

