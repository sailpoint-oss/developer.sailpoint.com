---
id: multihostintegrations-connector-attributes-multi-host-attributes
title: MultihostintegrationsConnectorAttributesMultiHostAttributes
pagination_label: MultihostintegrationsConnectorAttributesMultiHostAttributes
sidebar_label: MultihostintegrationsConnectorAttributesMultiHostAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsConnectorAttributesMultiHostAttributes', 'MultihostintegrationsConnectorAttributesMultiHostAttributes'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-connector-attributes-multi-host-attributes
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsConnectorAttributesMultiHostAttributes', 'MultihostintegrationsConnectorAttributesMultiHostAttributes']
---


# MultihostintegrationsConnectorAttributesMultiHostAttributes

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
$MultihostintegrationsConnectorAttributesMultiHostAttributes = Initialize-MultihostintegrationsConnectorAttributesMultiHostAttributes  -Password Password `
 -ConnectorFiles mssql-jdbc-8.4.1.jre8.jar `
 -AuthType SQLAuthentication `
 -User My Username
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsConnectorAttributesMultiHostAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

