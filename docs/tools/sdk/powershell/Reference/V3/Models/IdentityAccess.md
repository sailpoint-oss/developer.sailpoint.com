---
id: identity-access
title: IdentityAccess
pagination_label: IdentityAccess
sidebar_label: IdentityAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAccess', 'IdentityAccess'] 
slug: /tools/sdk/powershell/v3/models/identity-access
tags: ['SDK', 'Software Development Kit', 'IdentityAccess', 'IdentityAccess']
---


# IdentityAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Description** | **String** |  | [optional] 
**Source** | [**Reference1**](reference1) |  | [optional] 
**Owner** | [**DisplayReference**](display-reference) |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 
**Privileged** | **Boolean** |  | [optional] 
**Attribute** | **String** |  | [optional] 
**Value** | **String** |  | [optional] 
**Standalone** | **Boolean** |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAccess = Initialize-PSSailpoint.V3IdentityAccess  -Id 2c91808568c529c60168cca6f90c1313 `
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

