---
id: connectorcustomizercreateresponse
title: Connectorcustomizercreateresponse
pagination_label: Connectorcustomizercreateresponse
sidebar_label: Connectorcustomizercreateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorcustomizercreateresponse', 'Connectorcustomizercreateresponse'] 
slug: /tools/sdk/powershell/connectorcustomizers/models/connectorcustomizercreateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizercreateresponse', 'Connectorcustomizercreateresponse']
---


# Connectorcustomizercreateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the ID of connector customizer. | [optional] 
**Name** | **String** | name of the connector customizer. | [optional] 
**TenantID** | **String** | Connector customizer tenant id. | [optional] 
**Created** | **System.DateTime** | Date-time when the connector customizer was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectorcustomizercreateresponse = Initialize-Connectorcustomizercreateresponse  -Id b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -Name connector-customizer-name `
 -TenantID 2c91808568c529c60168cca6f90c1324 `
 -Created null
```

- Convert the resource to JSON
```powershell
$Connectorcustomizercreateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

