---
id: multihostintegrations-connector-attributes-multi-host-attributes
title: MultihostintegrationsConnectorAttributesMultiHostAttributes
pagination_label: MultihostintegrationsConnectorAttributesMultiHostAttributes
sidebar_label: MultihostintegrationsConnectorAttributesMultiHostAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsConnectorAttributesMultiHostAttributes', 'MultihostintegrationsConnectorAttributesMultiHostAttributes'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-connector-attributes-multi-host-attributes
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsConnectorAttributesMultiHostAttributes', 'MultihostintegrationsConnectorAttributesMultiHostAttributes']
---

# MultihostintegrationsConnectorAttributesMultiHostAttributes

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
from sailpoint.multi_host_integration.models.multihostintegrations_connector_attributes_multi_host_attributes import MultihostintegrationsConnectorAttributesMultiHostAttributes

multihostintegrations_connector_attributes_multi_host_attributes = MultihostintegrationsConnectorAttributesMultiHostAttributes(
password='Password',
connector_files='mssql-jdbc-8.4.1.jre8.jar',
auth_type='SQLAuthentication',
user='My Username'
)

```
[[Back to top]](#) 

