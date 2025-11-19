---
id: v2025-connector-customizers-response
title: ConnectorCustomizersResponse
pagination_label: ConnectorCustomizersResponse
sidebar_label: ConnectorCustomizersResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizersResponse', 'V2025ConnectorCustomizersResponse'] 
slug: /tools/sdk/powershell/v2025/models/connector-customizers-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizersResponse', 'V2025ConnectorCustomizersResponse']
---


# ConnectorCustomizersResponse

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
$ConnectorCustomizersResponse = Initialize-V2025ConnectorCustomizersResponse  -Id b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -Name connector-customizer-name `
 -ImageVersion 1 `
 -ImageID 2c91808568c529c60168cca6f90c1324 `
 -TenantID 2c91808568c529c60168cca6f90c1324 `
 -Created null
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizersResponse | ConvertTo-JSON
```


[[Back to top]](#) 

