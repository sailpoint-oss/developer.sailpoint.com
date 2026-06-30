---
id: resourceobjectsresponse
title: Resourceobjectsresponse
pagination_label: Resourceobjectsresponse
sidebar_label: Resourceobjectsresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Resourceobjectsresponse', 'Resourceobjectsresponse'] 
slug: /tools/sdk/powershell/sources/models/resourceobjectsresponse
tags: ['SDK', 'Software Development Kit', 'Resourceobjectsresponse', 'Resourceobjectsresponse']
---


# Resourceobjectsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source | [optional] [readonly] 
**Name** | **String** | Name of the source | [optional] [readonly] 
**ObjectCount** | **Int32** | The number of objects that were fetched by the connector. | [optional] [readonly] 
**ElapsedMillis** | **Int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**ResourceObjects** | [**[]Resourceobject**](resourceobject) | Fetched objects from the source connector. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Resourceobjectsresponse = Initialize-Resourceobjectsresponse  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name ODS-AD-Test [source-999999] `
 -ObjectCount 25 `
 -ElapsedMillis 1055 `
 -ResourceObjects null
```

- Convert the resource to JSON
```powershell
$Resourceobjectsresponse | ConvertTo-JSON
```


[[Back to top]](#) 

