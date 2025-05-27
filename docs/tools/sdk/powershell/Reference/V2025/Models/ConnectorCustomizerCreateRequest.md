---
id: v2025-connector-customizer-create-request
title: ConnectorCustomizerCreateRequest
pagination_label: ConnectorCustomizerCreateRequest
sidebar_label: ConnectorCustomizerCreateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizerCreateRequest', 'V2025ConnectorCustomizerCreateRequest'] 
slug: /tools/sdk/powershell/v2025/models/connector-customizer-create-request
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerCreateRequest', 'V2025ConnectorCustomizerCreateRequest']
---


# ConnectorCustomizerCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Connector customizer name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorCustomizerCreateRequest = Initialize-V2025ConnectorCustomizerCreateRequest  -Name My Custom Connector
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizerCreateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

