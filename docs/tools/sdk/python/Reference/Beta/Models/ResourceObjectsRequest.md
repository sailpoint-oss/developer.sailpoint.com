---
id: beta-resource-objects-request
title: ResourceObjectsRequest
pagination_label: ResourceObjectsRequest
sidebar_label: ResourceObjectsRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ResourceObjectsRequest', 'BetaResourceObjectsRequest'] 
slug: /tools/sdk/python/beta/models/resource-objects-request
tags: ['SDK', 'Software Development Kit', 'ResourceObjectsRequest', 'BetaResourceObjectsRequest']
---

# ResourceObjectsRequest

Request model for peek resource objects from source connectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | The type of resource objects to iterate over. | [optional] [default to 'account']
**max_count** | **int** | The maximum number of resource objects to iterate over and return. | [optional] [default to 25]
}

## Example

```python
from sailpoint.beta.models.resource_objects_request import ResourceObjectsRequest

resource_objects_request = ResourceObjectsRequest(
object_type='account',
max_count=100
)

```
[[Back to top]](#) 

