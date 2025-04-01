---
id: v2025-connector-customizer-update-request
title: ConnectorCustomizerUpdateRequest
pagination_label: ConnectorCustomizerUpdateRequest
sidebar_label: ConnectorCustomizerUpdateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizerUpdateRequest', 'V2025ConnectorCustomizerUpdateRequest'] 
slug: /tools/sdk/powershell/v2025/models/connector-customizer-update-request
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerUpdateRequest', 'V2025ConnectorCustomizerUpdateRequest']
---


# ConnectorCustomizerUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Connector customizer name. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorCustomizerUpdateRequest = Initialize-PSSailpoint.V2025ConnectorCustomizerUpdateRequest  -Name My Custom Connector
```

- Convert the resource to JSON
```powershell
$ConnectorCustomizerUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

