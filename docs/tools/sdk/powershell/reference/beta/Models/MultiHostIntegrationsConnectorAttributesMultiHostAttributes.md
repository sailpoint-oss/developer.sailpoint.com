---
id: multi-host-integrations-connector-attributes-multi-host-attributes
title: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
pagination_label: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsConnectorAttributesMultiHostAttributes'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-connector-attributes-multi-host-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributesMultiHostAttributes']
---


# MultiHostIntegrationsConnectorAttributesMultiHostAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** |  Pointer to **String** | Password. | [optional] 
**ConnectorFiles** |  Pointer to **String** | Connector file. | [optional] 
**AuthType** |  Pointer to **String** | Authentication type. | [optional] 
**User** |  Pointer to **String** | Username. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsConnectorAttributesMultiHostAttributes = Initialize-PSSailpoint.BetaMultiHostIntegrationsConnectorAttributesMultiHostAttributes  -Password Password `
 -ConnectorFiles mssql-jdbc-8.4.1.jre8.jar `
 -AuthType SQLAuthentication `
 -User My Username
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsConnectorAttributesMultiHostAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

