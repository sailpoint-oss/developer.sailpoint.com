---
id: beta-resource-objects-response
title: ResourceObjectsResponse
pagination_label: ResourceObjectsResponse
sidebar_label: ResourceObjectsResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ResourceObjectsResponse', 'BetaResourceObjectsResponse'] 
slug: /tools/sdk/powershell/beta/models/resource-objects-response
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsResponse', 'BetaResourceObjectsResponse']
---


# ResourceObjectsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the source | [optional] [readonly] 
**Name** |  Pointer to **String** | Name of the source | [optional] [readonly] 
**ObjectCount** |  Pointer to **Int32** | The number of objects that were fetched by the connector. | [optional] [readonly] 
**ElapsedMillis** |  Pointer to **Int32** | The number of milliseconds spent on the entire request. | [optional] [readonly] 
**ResourceObjects** |  Pointer to [**[]ResourceObject**](resource-object) | Fetched objects from the source connector. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$ResourceObjectsResponse = Initialize-PSSailpoint.BetaResourceObjectsResponse  -Id 2c91808568c529c60168cca6f90c1313 `
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

