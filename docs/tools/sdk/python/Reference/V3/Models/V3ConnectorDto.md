---
id: v3-connector-dto
title: V3ConnectorDto
pagination_label: V3ConnectorDto
sidebar_label: V3ConnectorDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'V3ConnectorDto', 'V3ConnectorDto'] 
slug: /tools/sdk/python/v3/models/v3-connector-dto
tags: ['SDK', 'Software Development Kit', 'V3ConnectorDto', 'V3ConnectorDto']
---

# V3ConnectorDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The connector name | [optional] 
**type** | **str** | The connector type | [optional] 
**script_name** | **str** | The connector script name | [optional] 
**class_name** | **str** | The connector class name. | [optional] 
**features** | **[]str** | The list of features supported by the connector | [optional] 
**direct_connect** | **bool** | true if the source is a direct connect source | [optional] [default to False]
**connector_metadata** | **map[string]object** | A map containing metadata pertinent to the connector | [optional] 
**status** |  **Enum** [  'DEPRECATED',    'DEVELOPMENT',    'DEMO',    'RELEASED' ] | The connector status | [optional] 
}

## Example

```python
from sailpoint.v3.models.v3_connector_dto import V3ConnectorDto

v3_connector_dto = V3ConnectorDto(
name='name',
type='ServiceNow',
script_name='servicenow',
class_name='sailpoint.connector.OpenConnectorAdapter',
features=[PROVISIONING, SYNC_PROVISIONING, SEARCH, UNSTRUCTURED_TARGETS],
direct_connect=True,
connector_metadata={supportedUI=ANGULAR, platform=ccg, shortDesc=connector description},
status='RELEASED'
)

```
[[Back to top]](#) 

