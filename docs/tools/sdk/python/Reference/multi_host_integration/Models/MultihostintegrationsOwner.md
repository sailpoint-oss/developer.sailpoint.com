---
id: multihostintegrations-owner
title: MultihostintegrationsOwner
pagination_label: MultihostintegrationsOwner
sidebar_label: MultihostintegrationsOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsOwner', 'MultihostintegrationsOwner'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-owner
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsOwner', 'MultihostintegrationsOwner']
---

# MultihostintegrationsOwner

Reference to identity object who owns the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Owner identity's ID. | [optional] 
**name** | **str** | Owner identity's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_owner import MultihostintegrationsOwner

multihostintegrations_owner = MultihostintegrationsOwner(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='MyName'
)

```
[[Back to top]](#) 

