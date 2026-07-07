---
id: connectorcustomizerupdateresponse
title: Connectorcustomizerupdateresponse
pagination_label: Connectorcustomizerupdateresponse
sidebar_label: Connectorcustomizerupdateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorcustomizerupdateresponse', 'Connectorcustomizerupdateresponse'] 
slug: /tools/sdk/powershell/connectorcustomizers/models/connectorcustomizerupdateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizerupdateresponse', 'Connectorcustomizerupdateresponse']
---


# Connectorcustomizerupdateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the ID of connector customizer. | [optional] 
**Name** | **String** | name of the connector customizer. | [optional] 
**TenantID** | **String** | Connector customizer tenant id. | [optional] 
**Created** | **System.DateTime** | Date-time when the connector customizer was created. | [optional] 
**ImageVersion** | **Int64** | Connector customizer image version. | [optional] 
**ImageID** | **String** | Connector customizer image id. | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectorcustomizerupdateresponse = Initialize-Connectorcustomizerupdateresponse  -Id b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -Name connector-customizer-name `
 -TenantID 2c91808568c529c60168cca6f90c1324 `
 -Created null `
 -ImageVersion 1 `
 -ImageID 2c91808568c529c60168cca6f90c1324
```

- Convert the resource to JSON
```powershell
$Connectorcustomizerupdateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

