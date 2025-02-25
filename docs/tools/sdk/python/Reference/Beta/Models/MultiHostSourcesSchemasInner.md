---
id: beta-multi-host-sources-schemas-inner
title: MultiHostSourcesSchemasInner
pagination_label: MultiHostSourcesSchemasInner
sidebar_label: MultiHostSourcesSchemasInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostSourcesSchemasInner', 'BetaMultiHostSourcesSchemasInner'] 
slug: /tools/sdk/python/beta/models/multi-host-sources-schemas-inner
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesSchemasInner', 'BetaMultiHostSourcesSchemasInner']
---

# MultiHostSourcesSchemasInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CONNECTOR_SCHEMA' ] | Type of object being referenced. | [optional] 
**id** | **str** | Schema ID. | [optional] 
**name** | **str** | Schema's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.multi_host_sources_schemas_inner import MultiHostSourcesSchemasInner

multi_host_sources_schemas_inner = MultiHostSourcesSchemasInner(
type='CONNECTOR_SCHEMA',
id='2c91808568c529c60168cca6f90c1777',
name='MySchema'
)

```
[[Back to top]](#) 

