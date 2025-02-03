---
id: v2024-app
title: App
pagination_label: App
sidebar_label: App
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'App', 'V2024App'] 
slug: /tools/sdk/powershell/v2024/models/app
tags: ['SDK', 'Software Development Kit', 'App', 'V2024App']
---


# App

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **String** | The human readable name of the referenced object. | [optional] 
**Source** |  Pointer to [**Reference1**](reference1) |  | [optional] 
**Account** |  Pointer to [**AppAllOfAccount**](app-all-of-account) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$App = Initialize-PSSailpoint.V2024App  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Source null `
 -Account null
```

- Convert the resource to JSON
```powershell
$App | ConvertTo-JSON
```


[[Back to top]](#) 

