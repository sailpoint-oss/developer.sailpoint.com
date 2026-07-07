---
id: v3connectordto
title: V3connectordto
pagination_label: V3connectordto
sidebar_label: V3connectordto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'V3connectordto', 'V3connectordto'] 
slug: /tools/sdk/python/connectors/models/v3connectordto
tags: ['SDK', 'Software Development Kit', 'V3connectordto', 'V3connectordto']
---

# V3connectordto


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
from sailpoint.connectors.models.v3connectordto import V3connectordto

v3connectordto = V3connectordto(
name='name',
type='ServiceNow',
script_name='servicenow',
class_name='sailpoint.connector.OpenConnectorAdapter',
features=["PROVISIONING","SYNC_PROVISIONING","SEARCH","UNSTRUCTURED_TARGETS"],
direct_connect=True,
connector_metadata={"supportedUI":"ANGULAR","platform":"ccg","shortDesc":"connector description"},
status='RELEASED'
)

```
[[Back to top]](#) 

