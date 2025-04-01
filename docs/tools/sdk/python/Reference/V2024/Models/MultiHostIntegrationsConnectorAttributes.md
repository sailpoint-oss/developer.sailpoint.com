---
id: v2024-multi-host-integrations-connector-attributes
title: MultiHostIntegrationsConnectorAttributes
pagination_label: MultiHostIntegrationsConnectorAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsConnectorAttributes', 'V2024MultiHostIntegrationsConnectorAttributes'] 
slug: /tools/sdk/python/v2024/models/multi-host-integrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributes', 'V2024MultiHostIntegrationsConnectorAttributes']
---

# MultiHostIntegrationsConnectorAttributes

Connector specific configuration. This configuration will differ for Multi-Host Integration type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_allowed_sources** | **int** | Maximum sources allowed count of a Multi-Host Integration | [optional] 
**last_source_upload_count** | **int** | Last upload sources count of a Multi-Host Integration | [optional] 
**connector_file_upload_history** | [**MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory**](multi-host-integrations-connector-attributes-connector-file-upload-history) |  | [optional] 
**multihost_status** |  **Enum** [  'ready',    'processing',    'fileUploadInProgress',    'sourceCreationInProgress',    'aggregationGroupingInProgress',    'aggregationScheduleInProgress',    'deleteInProgress',    'deleteFailed' ] | Multi-Host integration status. | [optional] 
**show_account_schema** | **bool** | Show account schema | [optional] [default to True]
**show_entitlement_schema** | **bool** | Show entitlement schema | [optional] [default to True]
**multi_host_attributes** | [**MultiHostIntegrationsConnectorAttributesMultiHostAttributes**](multi-host-integrations-connector-attributes-multi-host-attributes) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.multi_host_integrations_connector_attributes import MultiHostIntegrationsConnectorAttributes

multi_host_integrations_connector_attributes = MultiHostIntegrationsConnectorAttributes(
max_allowed_sources=250,
last_source_upload_count=40,
connector_file_upload_history=sailpoint.v2024.models.multi_host_integrations_connector_attributes_connector_file_upload_history.MultiHostIntegrations_connectorAttributes_connectorFileUploadHistory(
                    connector_file_name_uploaded_date = '2024-08-29T10:20:38.896479Z', ),
multihost_status='ready',
show_account_schema=True,
show_entitlement_schema=True,
multi_host_attributes=sailpoint.v2024.models.multi_host_integrations_connector_attributes_multi_host_attributes.MultiHostIntegrations_connectorAttributes_multiHostAttributes(
                    password = 'Password', 
                    connector_files = 'mssql-jdbc-8.4.1.jre8.jar', 
                    auth_type = 'SQLAuthentication', 
                    user = 'My Username', )
)

```
[[Back to top]](#) 

