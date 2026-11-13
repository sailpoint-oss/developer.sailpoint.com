# DimensionSchema

# DimensionSchema

Contains a list of dimension attributes. Required only for Dynamic Roles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_attributes** | [**[]DimensionAttribute**](dimension-attribute) |  | [optional] 
\}

## Example

```python
from sailpoint.roles.models.dimension_schema import DimensionSchema

dimension_schema = DimensionSchema(
dimension_attributes=[
                    sailpoint.roles.models.dimension_attribute.DimensionAttribute(
                        name = 'city', 
                        display_name = 'City', 
                        derived = True, )
                    ]
)

```
[[Back to top]](#) 

