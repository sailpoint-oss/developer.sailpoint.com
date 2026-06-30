---
id: displayreference
title: Displayreference
pagination_label: Displayreference
sidebar_label: Displayreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Displayreference', 'Displayreference'] 
slug: /tools/sdk/powershell/search/models/displayreference
tags: ['SDK', 'Software Development Kit', 'Displayreference', 'Displayreference']
---


# Displayreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**DisplayName** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Displayreference = Initialize-Displayreference  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName John Q. Doe
```

- Convert the resource to JSON
```powershell
$Displayreference | ConvertTo-JSON
```


[[Back to top]](#) 

