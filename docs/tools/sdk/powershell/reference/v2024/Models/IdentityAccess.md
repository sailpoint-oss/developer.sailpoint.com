---
id: v2024-identity-access
title: IdentityAccess
pagination_label: IdentityAccess
sidebar_label: IdentityAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAccess'] 
slug: /tools/sdk/powershell/v2024/models/identity-access
tags: ['SDK', 'Software Development Kit', 'IdentityAccess']
---


# IdentityAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** |  Pointer to **String** |  | [optional] 
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Description** |  Pointer to **String** |  | [optional] 
**Source** |  Pointer to [**Reference1**](reference1) |  | [optional] 
**Owner** |  Pointer to [**DisplayReference**](display-reference) |  | [optional] 
**Revocable** |  Pointer to **Boolean** |  | [optional] 
**Privileged** |  Pointer to **Boolean** |  | [optional] 
**Attribute** |  Pointer to **String** |  | [optional] 
**Value** |  Pointer to **String** |  | [optional] 
**Standalone** |  Pointer to **Boolean** |  | [optional] 
**Disabled** |  Pointer to **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAccess = Initialize-PSSailpoint.V2024IdentityAccess  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Type null `
 -Description null `
 -Source null `
 -Owner null `
 -Revocable null `
 -Privileged false `
 -Attribute memberOf `
 -Value CN&#x3D;Buyer,OU&#x3D;Groups,OU&#x3D;Demo,DC&#x3D;seri,DC&#x3D;sailpointdemo,DC&#x3D;com `
 -Standalone false `
 -Disabled null
```

- Convert the resource to JSON
```powershell
$IdentityAccess | ConvertTo-JSON
```


[[Back to top]](#) 

