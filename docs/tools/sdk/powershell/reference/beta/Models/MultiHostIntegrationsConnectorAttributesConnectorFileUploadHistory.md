---
id: multi-host-integrations-connector-attributes-connector-file-upload-history
title: MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory
pagination_label: MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory
sidebar_label: MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-connector-attributes-connector-file-upload-history
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory']
---


# MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectorFileNameUploadedDate** |  Pointer to **String** | File name of the connector JAR | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory = Initialize-PSSailpoint.BetaMultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory  -ConnectorFileNameUploadedDate 2024-08-29T10:20:38.896479Z
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory | ConvertTo-JSON
```


[[Back to top]](#) 

