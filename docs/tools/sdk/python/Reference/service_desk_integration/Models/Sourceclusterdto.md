---
id: sourceclusterdto
title: Sourceclusterdto
pagination_label: Sourceclusterdto
sidebar_label: Sourceclusterdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceclusterdto', 'Sourceclusterdto'] 
slug: /tools/sdk/python/service-desk-integration/models/sourceclusterdto
tags: ['SDK', 'Software Development Kit', 'Sourceclusterdto', 'Sourceclusterdto']
---

# Sourceclusterdto

Source cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CLUSTER' ] | Source cluster DTO type. | [optional] 
**id** | **str** | Source cluster ID. | [optional] 
**name** | **str** | Source cluster display name. | [optional] 
}

## Example

```python
from sailpoint.service_desk_integration.models.sourceclusterdto import Sourceclusterdto

sourceclusterdto = Sourceclusterdto(
type='CLUSTER',
id='2c9180847a7fccdd017aa5896f9f4f6f',
name='Training VA'
)

```
[[Back to top]](#) 

