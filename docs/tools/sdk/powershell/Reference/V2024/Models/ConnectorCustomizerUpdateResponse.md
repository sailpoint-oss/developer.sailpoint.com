---
id: v2024-connector-customizer-update-response
title: ConnectorCustomizerUpdateResponse
pagination_label: ConnectorCustomizerUpdateResponse
sidebar_label: ConnectorCustomizerUpdateResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizerUpdateResponse', 'V2024ConnectorCustomizerUpdateResponse'] 
slug: /tools/sdk/powershell/v2024/models/connector-customizer-update-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerUpdateResponse', 'V2024ConnectorCustomizerUpdateResponse']
---


# ConnectorCustomizerUpdateResponse

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
$ConnectorCustomizerUpdateResponse = Initialize-V2024ConnectorCustomizerUpdateResponse  -Id b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -Name connector-customizer-name `
 -TenantID 2c91808568c529c60168cca6f90c1324 `
 -Created null `
 -ImageVersion 1 `
 -ImageID 2c91808568c529c60168cca6f90c1324
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizerUpdateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

