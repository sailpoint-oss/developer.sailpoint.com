---
id: put-connector-source-template-v1-request
title: PutConnectorSourceTemplateV1Request
pagination_label: PutConnectorSourceTemplateV1Request
sidebar_label: PutConnectorSourceTemplateV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutConnectorSourceTemplateV1Request', 'PutConnectorSourceTemplateV1Request'] 
slug: /tools/sdk/powershell/connectors/models/put-connector-source-template-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceTemplateV1Request', 'PutConnectorSourceTemplateV1Request']
---


# PutConnectorSourceTemplateV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **System.IO.FileInfo** | connector source template xml file | [required]

## Examples

- Prepare the resource
```powershell
$PutConnectorSourceTemplateV1Request = Initialize-PutConnectorSourceTemplateV1Request  -File null
```

- Convert the resource to JSON
```powershell
$PutConnectorSourceTemplateV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

