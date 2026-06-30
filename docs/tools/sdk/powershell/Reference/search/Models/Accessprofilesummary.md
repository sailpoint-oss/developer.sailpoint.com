---
id: accessprofilesummary
title: Accessprofilesummary
pagination_label: Accessprofilesummary
sidebar_label: Accessprofilesummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofilesummary', 'Accessprofilesummary'] 
slug: /tools/sdk/powershell/search/models/accessprofilesummary
tags: ['SDK', 'Software Development Kit', 'Accessprofilesummary', 'Accessprofilesummary']
---


# Accessprofilesummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 
**Description** | **String** | Description of access item. | [optional] 
**Type** | **String** | Type of the access item. | [optional] 
**Source** | [**Reference**](reference) |  | [optional] 
**Owner** | [**Displayreference**](displayreference) |  | [optional] 
**Revocable** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofilesummary = Initialize-Accessprofilesummary  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe `
 -Description null `
 -Type ACCESS_PROFILE `
 -Source null `
 -Owner null `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$Accessprofilesummary | ConvertTo-JSON
```


[[Back to top]](#) 

