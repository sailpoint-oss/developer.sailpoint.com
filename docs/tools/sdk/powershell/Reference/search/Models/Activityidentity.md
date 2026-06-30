---
id: activityidentity
title: Activityidentity
pagination_label: Activityidentity
sidebar_label: Activityidentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Activityidentity', 'Activityidentity'] 
slug: /tools/sdk/powershell/search/models/activityidentity
tags: ['SDK', 'Software Development Kit', 'Activityidentity', 'Activityidentity']
---


# Activityidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**Type** | **String** | Type of object | [optional] 

## Examples

- Prepare the resource
```powershell
$Activityidentity = Initialize-Activityidentity  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Type Identity
```

- Convert the resource to JSON
```powershell
$Activityidentity | ConvertTo-JSON
```


[[Back to top]](#) 

