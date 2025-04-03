---
id: object-mapping-bulk-patch-response
title: ObjectMappingBulkPatchResponse
pagination_label: ObjectMappingBulkPatchResponse
sidebar_label: ObjectMappingBulkPatchResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectMappingBulkPatchResponse', 'ObjectMappingBulkPatchResponse'] 
slug: /tools/sdk/python/v3/models/object-mapping-bulk-patch-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchResponse', 'ObjectMappingBulkPatchResponse']
---

# ObjectMappingBulkPatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patched_objects** | [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.object_mapping_bulk_patch_response import ObjectMappingBulkPatchResponse

object_mapping_bulk_patch_response = ObjectMappingBulkPatchResponse(
patched_objects=[
                    sailpoint.v3.models.object_mapping_response.Object Mapping Response(
                        object_mapping_id = '3d6e0144-963f-4bd6-8d8d-d77b4e507ce4', 
                        object_type = 'IDENTITY', 
                        json_path = '$.name', 
                        source_value = 'My Governance Group Name', 
                        target_value = 'My New Governance Group Name', 
                        enabled = False, 
                        created = '2024-03-19T23:18:53.732Z', 
                        modified = '2024-03-19T23:18:53.732Z', )
                    ]
)

```
[[Back to top]](#) 

