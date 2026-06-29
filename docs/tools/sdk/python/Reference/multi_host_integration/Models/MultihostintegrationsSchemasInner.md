---
id: multihostintegrations-schemas-inner
title: MultihostintegrationsSchemasInner
pagination_label: MultihostintegrationsSchemasInner
sidebar_label: MultihostintegrationsSchemasInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsSchemasInner', 'MultihostintegrationsSchemasInner'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-schemas-inner
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsSchemasInner', 'MultihostintegrationsSchemasInner']
---

# MultihostintegrationsSchemasInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CONNECTOR_SCHEMA' ] | Type of object being referenced. | [optional] 
**id** | **str** | Schema ID. | [optional] 
**name** | **str** | Schema's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_schemas_inner import MultihostintegrationsSchemasInner

multihostintegrations_schemas_inner = MultihostintegrationsSchemasInner(
type='CONNECTOR_SCHEMA',
id='2c91808568c529c60168cca6f90c1777',
name='MySchema'
)

```
[[Back to top]](#) 

