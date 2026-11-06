# ValidateFilterInputDto

# ValidateFilterInputDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **object** | Mock input to evaluate filter expression against. | [required]
**filter** | **str** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [required]
\}

## Example

```python
from sailpoint.triggers.models.validate_filter_input_dto import ValidateFilterInputDto

validate_filter_input_dto = ValidateFilterInputDto(
input={"identityId":"201327fda1c44704ac01181e963d463c"},
filter='$[?($.identityId == "201327fda1c44704ac01181e963d463c")]'
)

```
[[Back to top]](#) 

