---
id: v2024-access-profile-role
title: AccessProfileRole
pagination_label: AccessProfileRole
sidebar_label: AccessProfileRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileRole', 'V2024AccessProfileRole'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-role
tags: ['SDK', 'Software Development Kit', 'AccessProfileRole', 'V2024AccessProfileRole']
---


# AccessProfileRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Description** | **String** |  | [optional] 
**Owner** | [**DisplayReference**](display-reference) |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileRole = Initialize-PSSailpoint.V2024AccessProfileRole  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Type null `
 -Description null `
 -Owner null `
 -Disabled null `
 -Revocable null
```

- Convert the resource to JSON
```powershell
$AccessProfileRole | ConvertTo-JSON
```


[[Back to top]](#) 

