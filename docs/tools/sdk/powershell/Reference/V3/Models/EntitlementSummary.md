---
id: entitlement-summary
title: EntitlementSummary
pagination_label: EntitlementSummary
sidebar_label: EntitlementSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementSummary', 'EntitlementSummary'] 
slug: /tools/sdk/powershell/v3/models/entitlement-summary
tags: ['SDK', 'Software Development Kit', 'EntitlementSummary', 'EntitlementSummary']
---


# EntitlementSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Source** | [**Reference1**](reference1) |  | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Privileged** | **Boolean** |  | [optional] 
**Attribute** | **String** |  | [optional] 
**Value** | **String** |  | [optional] 
**Standalone** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementSummary = Initialize-PSSailpoint.V3EntitlementSummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Source null `
 -Type ENTITLEMENT `
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

