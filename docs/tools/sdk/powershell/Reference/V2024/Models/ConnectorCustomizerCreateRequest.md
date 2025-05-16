---
id: v2024-connector-customizer-create-request
title: ConnectorCustomizerCreateRequest
pagination_label: ConnectorCustomizerCreateRequest
sidebar_label: ConnectorCustomizerCreateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizerCreateRequest', 'V2024ConnectorCustomizerCreateRequest'] 
slug: /tools/sdk/powershell/v2024/models/connector-customizer-create-request
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerCreateRequest', 'V2024ConnectorCustomizerCreateRequest']
---


# ConnectorCustomizerCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Connector customizer name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorCustomizerCreateRequest = Initialize-V2024ConnectorCustomizerCreateRequest  -Name My Custom Connector
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizerCreateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

