---
id: access
title: Access
pagination_label: Access
sidebar_label: Access
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Access', 'Access'] 
slug: /tools/sdk/powershell/v3/models/access
tags: ['SDK', 'Software Development Kit', 'Access', 'Access']
---


# Access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Description** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Access = Initialize-PSSailpoint.V3Access  -Id 2c91808568c529c60168cca6f90c1313 `
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

