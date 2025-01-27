---
id: v2024-access
title: Access
pagination_label: Access
sidebar_label: Access
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Access'] 
slug: /tools/sdk/powershell/v2024/models/access
tags: ['SDK', 'Software Development Kit', 'Access']
---


# Access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** |  Pointer to **String** |  | [optional] 
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Description** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Access = Initialize-PSSailpoint.V2024Access  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Type null `
 -Description null
```

- Convert the resource to JSON
```powershell
$Access | ConvertTo-JSON
```


[[Back to top]](#) 

