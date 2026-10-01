# AttributeValueDTO

# AttributeValueDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Technical name of the Attribute value. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore. | [optional] 
**name** | **str** | The display name of the Attribute value. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ - | [optional] 
**status** | **str** | The status of the Attribute value. | [optional] 
**type** |  **Enum** [  'static',    'adhoc' ] | Indicates how this Attribute value was created. static values are pre-defined and created directly through this API. adhoc values are created dynamically through an internal service-to-service flow when the parent Attribute has isAdhoc set to true, and cannot be created directly through the public create-value API. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.attribute_value_dto import AttributeValueDTO

attribute_value_dto = AttributeValueDTO(
value='public',
name='Public',
status='active',
type='static'
)

```
[[Back to top]](#) 

