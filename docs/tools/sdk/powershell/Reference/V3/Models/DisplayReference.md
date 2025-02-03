---
id: display-reference
title: DisplayReference
pagination_label: DisplayReference
sidebar_label: DisplayReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DisplayReference', 'DisplayReference'] 
slug: /tools/sdk/powershell/v3/models/display-reference
tags: ['SDK', 'Software Development Kit', 'DisplayReference', 'DisplayReference']
---


# DisplayReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DisplayReference = Initialize-PSSailpoint.V3DisplayReference  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe
```

- Convert the resource to JSON
```powershell
$DisplayReference | ConvertTo-JSON
```


[[Back to top]](#) 

