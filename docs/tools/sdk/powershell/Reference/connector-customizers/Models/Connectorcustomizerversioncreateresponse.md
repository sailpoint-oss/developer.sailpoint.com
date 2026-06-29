---
id: connectorcustomizerversioncreateresponse
title: Connectorcustomizerversioncreateresponse
pagination_label: Connectorcustomizerversioncreateresponse
sidebar_label: Connectorcustomizerversioncreateresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorcustomizerversioncreateresponse', 'Connectorcustomizerversioncreateresponse'] 
slug: /tools/sdk/powershell/connectorcustomizers/models/connectorcustomizerversioncreateresponse
tags: ['SDK', 'Software Development Kit', 'Connectorcustomizerversioncreateresponse', 'Connectorcustomizerversioncreateresponse']
---


# Connectorcustomizerversioncreateresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomizerID** | **String** | ID of connector customizer. | [optional] 
**ImageID** | **String** | ImageID of the connector customizer. | [optional] 
**Version** | **Int64** | Image version of the connector customizer. | [optional] 
**Created** | **System.DateTime** | Date-time when the connector customizer version was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$Connectorcustomizerversioncreateresponse = Initialize-Connectorcustomizerversioncreateresponse  -CustomizerID b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -ImageID 2c91808568c529c60168cca6f90c1324 `
 -Version 1 `
 -Created 2022-02-08T14:50:03.827Z
```

- Convert the resource to JSON
```powershell
$Connectorcustomizerversioncreateresponse | ConvertTo-JSON
```


[[Back to top]](#) 

