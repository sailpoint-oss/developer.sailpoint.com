---
id: v2024-put-connector-correlation-config-request
title: PutConnectorCorrelationConfigRequest
pagination_label: PutConnectorCorrelationConfigRequest
sidebar_label: PutConnectorCorrelationConfigRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutConnectorCorrelationConfigRequest', 'V2024PutConnectorCorrelationConfigRequest'] 
slug: /tools/sdk/powershell/v2024/models/put-connector-correlation-config-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorCorrelationConfigRequest', 'V2024PutConnectorCorrelationConfigRequest']
---


# PutConnectorCorrelationConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector correlation config xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorCorrelationConfigRequest = Initialize-V2024PutConnectorCorrelationConfigRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorCorrelationConfigRequest | ConvertTo-JSON
```


[[Back to top]](#) 

