---
id: v2024-access-profile-entitlement
title: AccessProfileEntitlement
pagination_label: AccessProfileEntitlement
sidebar_label: AccessProfileEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileEntitlement', 'V2024AccessProfileEntitlement'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-entitlement
tags: ['SDK', 'Software Development Kit', 'AccessProfileEntitlement', 'V2024AccessProfileEntitlement']
---


# AccessProfileEntitlement

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
$AccessProfileEntitlement = Initialize-PSSailpoint.V2024AccessProfileEntitlement  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Source null `
 -Type ENTITLEMENT `
 -Privileged false `
 -Attribute memberOf `
 -Value CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com `
 -Standalone false
```

- Convert the resource to JSON
```powershell
$AccessProfileEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

