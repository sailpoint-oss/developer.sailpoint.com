# AttributeMappingsAllOfTransformDefinitionAttributes

# AttributeMappingsAllOfTransformDefinitionAttributes

attributes object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | [**AttributeMappingsAllOfTransformDefinitionAttributesInput**](attribute-mappings-all-of-transform-definition-attributes-input) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes import AttributeMappingsAllOfTransformDefinitionAttributes

attribute_mappings_all_of_transform_definition_attributes = AttributeMappingsAllOfTransformDefinitionAttributes(
input=sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes_input.AttributeMappings_allOf_transformDefinition_attributes_input(
                    type = 'accountAttribute', 
                    attributes = sailpoint.machine_account_mappings.models.attribute_mappings_all_of_transform_definition_attributes_input_attributes.AttributeMappings_allOf_transformDefinition_attributes_input_attributes(
                        attribute_name = 'givenName', 
                        source_name = 'delimited-src', 
                        name = '8d3e0094e99445de98eef6c75e25jc04', ), )
)

```
[[Back to top]](#) 

