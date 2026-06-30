---
id: connectorcustomizersresponse
title: Connectorcustomizersresponse
pagination_label: Connectorcustomizersresponse
sidebar_label: Connectorcustomizersresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorcustomizersresponse', 'Connectorcustomizersresponse'] 
slug: /tools/sdk/powershell/connectorcustomizers/models/connectorcustomizersresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizersresponse', 'Connectorcustomizersresponse']
---


# Connectorcustomizersresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Connector customizer ID. | [optional] [readonly] 
**Name** | **String** | Connector customizer name. | [optional] 
**ImageVersion** | **Int64** | Connector customizer image version. | [optional] 
**ImageID** | **String** | Connector customizer image id. | [optional] 
**TenantID** | **String** | Connector customizer tenant id. | [optional] 
**Created** | **System.DateTime** | Date-time when the connector customizer was created | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectorcustomizersresponse = Initialize-Connectorcustomizersresponse  -Id b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -Name connector-customizer-name `
 -ImageVersion 1 `
 -ImageID 2c91808568c529c60168cca6f90c1324 `
 -TenantID 2c91808568c529c60168cca6f90c1324 `
 -Created null
```

- Convert the resource to JSON
```powershell
$Connectorcustomizersresponse | ConvertTo-JSON
```


[[Back to top]](#) 

