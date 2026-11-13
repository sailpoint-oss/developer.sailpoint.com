# ObjectMappingBulkCreateResponse

# ObjectMappingBulkCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_objects** | [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 
\}

## Example

```python
from sailpoint.configuration_hub.models.object_mapping_bulk_create_response import ObjectMappingBulkCreateResponse

object_mapping_bulk_create_response = ObjectMappingBulkCreateResponse(
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

