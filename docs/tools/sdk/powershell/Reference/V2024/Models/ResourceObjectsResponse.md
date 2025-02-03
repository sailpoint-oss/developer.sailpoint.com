---
id: v2024-resource-objects-response
title: ResourceObjectsResponse
pagination_label: ResourceObjectsResponse
sidebar_label: ResourceObjectsResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ResourceObjectsResponse', 'V2024ResourceObjectsResponse'] 
slug: /tools/sdk/powershell/v2024/models/resource-objects-response
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsResponse', 'V2024ResourceObjectsResponse']
---


# ResourceObjectsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source | [optional] [readonly] 
**Name** | **String** | Name of the source | [optional] [readonly] 
**ObjectCount** | **Int32** | The number of objects that were fetched by the connector. | [optional] [readonly] 
**ElapsedMillis** | **Int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**ResourceObjects** | [**[]ResourceObject**](resource-object) | Fetched objects from the source connector. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$ResourceObjectsResponse = Initialize-PSSailpoint.V2024ResourceObjectsResponse  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name ODS-AD-Test [source-999999] `
 -ObjectCount 25 `
 -ElapsedMillis 1055 `
 -ResourceObjects null
```

- Convert the resource to JSON
```powershell
$ResourceObjectsResponse | ConvertTo-JSON
```


[[Back to top]](#) 

