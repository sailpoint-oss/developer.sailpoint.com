---
id: v2025-connector-customizer-create-response
title: ConnectorCustomizerCreateResponse
pagination_label: ConnectorCustomizerCreateResponse
sidebar_label: ConnectorCustomizerCreateResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizerCreateResponse', 'V2025ConnectorCustomizerCreateResponse'] 
slug: /tools/sdk/powershell/v2025/models/connector-customizer-create-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerCreateResponse', 'V2025ConnectorCustomizerCreateResponse']
---


# ConnectorCustomizerCreateResponse

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
$ConnectorCustomizerCreateResponse = Initialize-V2025ConnectorCustomizerCreateResponse  -Id b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -Name connector-customizer-name `
 -TenantID 2c91808568c529c60168cca6f90c1324 `
 -Created null
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizerCreateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

