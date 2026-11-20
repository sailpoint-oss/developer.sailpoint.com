# ContextAttributeDto

# ContextAttributeDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The name of the attribute | [optional] 
**value** | [**ContextAttributeDtoValue**](context-attribute-dto-value) |  | [optional] 
**derived** | **bool** | True if the attribute was derived. | [optional] [default to False]
\}

## Example

```python
from sailpoint.identities.models.context_attribute_dto import ContextAttributeDto

context_attribute_dto = ContextAttributeDto(
attribute='location',
value=Austin,
derived=False
)

```
[[Back to top]](#) 

