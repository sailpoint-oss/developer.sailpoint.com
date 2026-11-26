# AttributeDTOList

# AttributeDTOList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 
\}

## Example

```python
from sailpoint.dimensions.models.attribute_dto_list import AttributeDTOList

attribute_dto_list = AttributeDTOList(
attributes=[{"key":"iscPrivacy","name":"Privacy","multiselect":false,"status":"active","type":"governance","objectTypes":["all"],"description":"Specifies the level of privacy associated with an access item.","values":[{"value":"public","name":"Public","status":"active"}]}]
)

```
[[Back to top]](#) 

