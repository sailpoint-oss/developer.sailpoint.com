---
id: v2025-multi-host-integrations-connector-attributes-multi-host-attributes
title: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
pagination_label: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsConnectorAttributesMultiHostAttributes', 'V2025MultiHostIntegrationsConnectorAttributesMultiHostAttributes'] 
slug: /tools/sdk/powershell/v2025/models/multi-host-integrations-connector-attributes-multi-host-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributesMultiHostAttributes', 'V2025MultiHostIntegrationsConnectorAttributesMultiHostAttributes']
---


# MultiHostIntegrationsConnectorAttributesMultiHostAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | **String** | Password. | [optional] 
**ConnectorFiles** | **String** | Connector file. | [optional] 
**AuthType** | **String** | Authentication type. | [optional] 
**User** | **String** | Username. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsConnectorAttributesMultiHostAttributes = Initialize-PSSailpoint.V2025MultiHostIntegrationsConnectorAttributesMultiHostAttributes  -Password Password `
 -ConnectorFiles mssql-jdbc-8.4.1.jre8.jar `
 -AuthType SQLAuthentication `
 -User My Username
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsConnectorAttributesMultiHostAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

