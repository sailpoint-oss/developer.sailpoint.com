---
id: v2025-access
title: Access
pagination_label: Access
sidebar_label: Access
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Access', 'V2025Access'] 
slug: /tools/sdk/powershell/v2025/models/access
tags: ['SDK', 'Software Development Kit', 'Access', 'V2025Access']
---


# Access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 

## Examples

- Prepare the resource
```powershell
$Access = Initialize-PSSailpoint.V2025Access  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null
```

- Convert the resource to JSON
```powershell
$Access | ConvertTo-JSON
```


[[Back to top]](#) 

