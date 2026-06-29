---
id: accessprofilerole
title: Accessprofilerole
pagination_label: Accessprofilerole
sidebar_label: Accessprofilerole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofilerole', 'Accessprofilerole'] 
slug: /tools/sdk/powershell/search/models/accessprofilerole
tags: ['SDK', 'Software Development Kit', 'Accessprofilerole', 'Accessprofilerole']
---


# Accessprofilerole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Owner** | [**Displayreference**](displayreference) |  | [optional] 
**Disabled** | **Boolean** |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofilerole = Initialize-Accessprofilerole  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Type ROLE `
 -Owner null `
 -Disabled null `
 -Revocable null
```

- Convert the resource to JSON
```powershell
$Accessprofilerole | ConvertTo-JSON
```


[[Back to top]](#) 

