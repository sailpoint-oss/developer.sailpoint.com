# DimensionAttribute

# DimensionAttribute

A dimension attribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the attribute | [optional] 
**display_name** | **str** | Display name of the attribute | [optional] 
**derived** | **bool** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to True]
\}

## Example

```python
from sailpoint.roles.models.dimension_attribute import DimensionAttribute

dimension_attribute = DimensionAttribute(
name='city',
display_name='City',
derived=True
)

```
[[Back to top]](#) 

