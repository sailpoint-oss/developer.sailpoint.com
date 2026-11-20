# AttributeMappings

# AttributeMappings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | [**AttributeMappingsAllOfTarget**](attribute-mappings-all-of-target) |  | [optional] 
**transform_definition** | [**AttributeMappingsAllOfTransformDefinition**](attribute-mappings-all-of-transform-definition) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_mappings.models.attribute_mappings import AttributeMappings

attribute_mappings = AttributeMappings(
target=sailpoint.machine_account_mappings.models.attribute_mappings_all_of_target.AttributeMappings_allOf_target(
                    type = 'IDENTITY', 
                    attribute_name = 'businessApplication', 
                    source_id = '2c9180835d2e5168015d32f890ca1581', ),
transform_definition=sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition.AttributeMappings_allOf_transformDefinition(
                    type = 'reference', 
                    attributes = sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes.AttributeMappings_allOf_transformDefinition_attributes(
                        input = sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes_input.AttributeMappings_allOf_transformDefinition_attributes_input(
                            type = 'accountAttribute', ), ), 
                    id = 'ToUpper', )
)

```
[[Back to top]](#) 

