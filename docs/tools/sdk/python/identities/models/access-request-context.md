# AccessRequestContext

# AccessRequestContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_attributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
\}

## Example

```python
from sailpoint.identities.models.access_request_context import AccessRequestContext

access_request_context = AccessRequestContext(
context_attributes=[
                    sailpoint.identities.models.context_attribute_dto.Context Attribute Dto(
                        attribute = 'location', 
                        value = Austin, 
                        derived = False, )
                    ]
)

```
[[Back to top]](#) 

