---
id: v3createconnectordto
title: V3createconnectordto
pagination_label: V3createconnectordto
sidebar_label: V3createconnectordto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'V3createconnectordto', 'V3createconnectordto'] 
slug: /tools/sdk/python/connectors/models/v3createconnectordto
tags: ['SDK', 'Software Development Kit', 'V3createconnectordto', 'V3createconnectordto']
---

# V3createconnectordto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The connector name. Need to be unique per tenant. The name will able be used to derive a url friendly unique scriptname that will be in response. Script name can then be used for all update endpoints | [required]
**type** | **str** | The connector type. If not specified will be defaulted to 'custom '+name | [optional] 
**class_name** | **str** | The connector class name. If you are implementing openconnector standard (what is recommended), then this need to be set to sailpoint.connector.OpenConnectorAdapter | [required]
**direct_connect** | **bool** | true if the source is a direct connect source | [optional] [default to True]
**status** |  **Enum** [  'DEVELOPMENT',    'DEMO',    'RELEASED' ] | The connector status | [optional] 
}

## Example

```python
from sailpoint.connectors.models.v3createconnectordto import V3createconnectordto

v3createconnectordto = V3createconnectordto(
name='custom connector',
type='custom connector type',
class_name='sailpoint.connector.OpenConnectorAdapter',
direct_connect=True,
status='RELEASED'
)

```
[[Back to top]](#) 

