---
id: object-mapping-bulk-patch-request
title: ObjectMappingBulkPatchRequest
pagination_label: ObjectMappingBulkPatchRequest
sidebar_label: ObjectMappingBulkPatchRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectMappingBulkPatchRequest', 'ObjectMappingBulkPatchRequest'] 
slug: /tools/sdk/python/v3/models/object-mapping-bulk-patch-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchRequest', 'ObjectMappingBulkPatchRequest']
---

# ObjectMappingBulkPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patches** | [**map[string]List[JsonPatchOperation]**](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | [required]
}

## Example

```python
from sailpoint.v3.models.object_mapping_bulk_patch_request import ObjectMappingBulkPatchRequest

object_mapping_bulk_patch_request = ObjectMappingBulkPatchRequest(
patches={603b1a61-d03d-4ed1-864f-a508fbd1995d=[{op=replace, path=/enabled, value=true}], 00bece34-f50d-4227-8878-76f620b5a971=[{op=replace, path=/targetValue, value=New Target Value}]}
)

```
[[Back to top]](#) 

