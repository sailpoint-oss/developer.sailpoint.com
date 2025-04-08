---
id: v2025-identity-access
title: IdentityAccess
pagination_label: IdentityAccess
sidebar_label: IdentityAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAccess', 'V2025IdentityAccess'] 
slug: /tools/sdk/powershell/v2025/models/identity-access
tags: ['SDK', 'Software Development Kit', 'IdentityAccess', 'V2025IdentityAccess']
---


# IdentityAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
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
$IdentityAccess = Initialize-PSSailpoint.V2025IdentityAccess  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Type ROLE `
 -Source null `
 -Owner null `
 -Revocable null `
 -Privileged false `
 -Attribute memberOf `
 -Value CN=Buyer,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com `
 -Standalone false `
 -Disabled null
```

- Convert the resource to JSON
```powershell
$IdentityAccess | ConvertTo-JSON
```


[[Back to top]](#) 

