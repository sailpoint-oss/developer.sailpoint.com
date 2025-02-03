---
id: v2024-put-connector-source-config-request
title: PutConnectorSourceConfigRequest
pagination_label: PutConnectorSourceConfigRequest
sidebar_label: PutConnectorSourceConfigRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutConnectorSourceConfigRequest', 'V2024PutConnectorSourceConfigRequest'] 
slug: /tools/sdk/powershell/v2024/models/put-connector-source-config-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceConfigRequest', 'V2024PutConnectorSourceConfigRequest']
---


# PutConnectorSourceConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector source config xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorSourceConfigRequest = Initialize-PSSailpoint.V2024PutConnectorSourceConfigRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorSourceConfigRequest | ConvertTo-JSON
```


[[Back to top]](#) 

