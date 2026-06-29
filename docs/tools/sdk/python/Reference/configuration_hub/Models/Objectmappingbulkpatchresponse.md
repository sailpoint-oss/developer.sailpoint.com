---
id: objectmappingbulkpatchresponse
title: Objectmappingbulkpatchresponse
pagination_label: Objectmappingbulkpatchresponse
sidebar_label: Objectmappingbulkpatchresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Objectmappingbulkpatchresponse', 'Objectmappingbulkpatchresponse'] 
slug: /tools/sdk/python/configuration-hub/models/objectmappingbulkpatchresponse
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkpatchresponse', 'Objectmappingbulkpatchresponse']
---

# Objectmappingbulkpatchresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patched_objects** | [**[]Objectmappingresponse**](objectmappingresponse) |  | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.objectmappingbulkpatchresponse import Objectmappingbulkpatchresponse

objectmappingbulkpatchresponse = Objectmappingbulkpatchresponse(
patched_objects=[
                    sailpoint.configuration_hub.models.object_mapping_response.Object Mapping Response(
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

