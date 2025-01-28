---
id: v2024-put-connector-source-template-request
title: PutConnectorSourceTemplateRequest
pagination_label: PutConnectorSourceTemplateRequest
sidebar_label: PutConnectorSourceTemplateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutConnectorSourceTemplateRequest'] 
slug: /tools/sdk/powershell/v2024/models/put-connector-source-template-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceTemplateRequest']
---


# PutConnectorSourceTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | connector source template xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorSourceTemplateRequest = Initialize-PSSailpoint.V2024PutConnectorSourceTemplateRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorSourceTemplateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

