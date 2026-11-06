# AttributeChange

# AttributeChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the attribute name | [optional] 
**previous_value** | **str** | the old value of attribute | [optional] 
**new_value** | **str** | the new value of attribute | [optional] 
\}

## Example

```python
from sailpoint.identity_history.models.attribute_change import AttributeChange

attribute_change = AttributeChange(
name='firstname',
previous_value='adam',
new_value='zampa'
)

```
[[Back to top]](#) 

