---
id: put-connector-source-config-v1-request
title: PutConnectorSourceConfigV1Request
pagination_label: PutConnectorSourceConfigV1Request
sidebar_label: PutConnectorSourceConfigV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutConnectorSourceConfigV1Request', 'PutConnectorSourceConfigV1Request'] 
slug: /tools/sdk/powershell/connectors/models/put-connector-source-config-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceConfigV1Request', 'PutConnectorSourceConfigV1Request']
---


# PutConnectorSourceConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector source config xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorSourceConfigV1Request = Initialize-PutConnectorSourceConfigV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorSourceConfigV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

