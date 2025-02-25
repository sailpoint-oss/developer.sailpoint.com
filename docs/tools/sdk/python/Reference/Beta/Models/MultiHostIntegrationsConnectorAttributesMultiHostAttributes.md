---
id: beta-multi-host-integrations-connector-attributes-multi-host-attributes
title: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
pagination_label: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributesMultiHostAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsConnectorAttributesMultiHostAttributes', 'BetaMultiHostIntegrationsConnectorAttributesMultiHostAttributes'] 
slug: /tools/sdk/python/beta/models/multi-host-integrations-connector-attributes-multi-host-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributesMultiHostAttributes', 'BetaMultiHostIntegrationsConnectorAttributesMultiHostAttributes']
---

# MultiHostIntegrationsConnectorAttributesMultiHostAttributes

Attributes of Multi-Host Integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password. | [optional] 
**connector_files** | **str** | Connector file. | [optional] 
**auth_type** | **str** | Authentication type. | [optional] 
**user** | **str** | Username. | [optional] 
}

## Example

```python
from sailpoint.beta.models.multi_host_integrations_connector_attributes_multi_host_attributes import MultiHostIntegrationsConnectorAttributesMultiHostAttributes

multi_host_integrations_connector_attributes_multi_host_attributes = MultiHostIntegrationsConnectorAttributesMultiHostAttributes(
password='Password',
connector_files='mssql-jdbc-8.4.1.jre8.jar',
auth_type='SQLAuthentication',
user='My Username'
)

```
[[Back to top]](#) 

