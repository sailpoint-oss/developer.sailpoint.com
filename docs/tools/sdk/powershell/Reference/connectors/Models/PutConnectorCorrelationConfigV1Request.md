---
id: put-connector-correlation-config-v1-request
title: PutConnectorCorrelationConfigV1Request
pagination_label: PutConnectorCorrelationConfigV1Request
sidebar_label: PutConnectorCorrelationConfigV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutConnectorCorrelationConfigV1Request', 'PutConnectorCorrelationConfigV1Request'] 
slug: /tools/sdk/powershell/connectors/models/put-connector-correlation-config-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorCorrelationConfigV1Request', 'PutConnectorCorrelationConfigV1Request']
---


# PutConnectorCorrelationConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector correlation config xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorCorrelationConfigV1Request = Initialize-PutConnectorCorrelationConfigV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorCorrelationConfigV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

