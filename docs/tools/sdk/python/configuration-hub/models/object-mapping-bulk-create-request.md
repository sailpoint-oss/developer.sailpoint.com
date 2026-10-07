# ObjectMappingBulkCreateRequest

# ObjectMappingBulkCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_objects_mappings** | [**[]ObjectMappingRequest**](object-mapping-request) |  | [required]
\}

## Example

```python
from sailpoint.configuration_hub.models.object_mapping_bulk_create_request import ObjectMappingBulkCreateRequest

object_mapping_bulk_create_request = ObjectMappingBulkCreateRequest(
new_objects_mappings=[
                    sailpoint.configuration_hub.models.object_mapping_request.Object Mapping Request(
                        object_type = 'IDENTITY', 
                        json_path = '$.name', 
                        source_value = 'My Governance Group Name', 
                        target_value = 'My New Governance Group Name', 
                        enabled = False, )
                    ]
)

```
[[Back to top]](#) 

