---
id: v2024-connector-customizer-version-create-response
title: ConnectorCustomizerVersionCreateResponse
pagination_label: ConnectorCustomizerVersionCreateResponse
sidebar_label: ConnectorCustomizerVersionCreateResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizerVersionCreateResponse', 'V2024ConnectorCustomizerVersionCreateResponse'] 
slug: /tools/sdk/powershell/v2024/models/connector-customizer-version-create-response
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerVersionCreateResponse', 'V2024ConnectorCustomizerVersionCreateResponse']
---


# ConnectorCustomizerVersionCreateResponse

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
$ConnectorCustomizerVersionCreateResponse = Initialize-PSSailpoint.V2024ConnectorCustomizerVersionCreateResponse  -CustomizerID b07dc46a-1498-4de8-bfbb-259a68e70c8a `
 -ImageID 2c91808568c529c60168cca6f90c1324 `
 -Version 1 `
 -Created 2022-02-08T14:50:03.827Z
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizerVersionCreateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

