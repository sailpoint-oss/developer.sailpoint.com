---
id: objectmappingbulkcreateresponse
title: Objectmappingbulkcreateresponse
pagination_label: Objectmappingbulkcreateresponse
sidebar_label: Objectmappingbulkcreateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Objectmappingbulkcreateresponse', 'Objectmappingbulkcreateresponse'] 
slug: /tools/sdk/python/configuration-hub/models/objectmappingbulkcreateresponse
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkcreateresponse', 'Objectmappingbulkcreateresponse']
---

# Objectmappingbulkcreateresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_objects** | [**[]Objectmappingresponse**](objectmappingresponse) |  | [optional] 
}

## Example

```python
from sailpoint.configuration_hub.models.objectmappingbulkcreateresponse import Objectmappingbulkcreateresponse

objectmappingbulkcreateresponse = Objectmappingbulkcreateresponse(
added_objects=[
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

