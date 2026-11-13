# AttributeMappingsAllOfTransformDefinition

# AttributeMappingsAllOfTransformDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of transform | [optional] 
**attributes** | [**AttributeMappingsAllOfTransformDefinitionAttributes**](attribute-mappings-all-of-transform-definition-attributes) |  | [optional] 
**id** | **str** | Transform Operation | [optional] 
\}

## Example

```python
from sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition import AttributeMappingsAllOfTransformDefinition

attribute_mappings_all_of_transform_definition = AttributeMappingsAllOfTransformDefinition(
type='reference',
attributes=sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes.AttributeMappings_allOf_transformDefinition_attributes(
                    input = sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes_input.AttributeMappings_allOf_transformDefinition_attributes_input(
                        type = 'accountAttribute', ), ),
id='ToUpper'
)

```
[[Back to top]](#) 

