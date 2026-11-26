# FieldDetailsDto

# FieldDetailsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the attribute. | [optional] [default to '']
**transform** | **object** | The transform to apply to the field. | [optional] 
**attributes** | **object** | Attributes required for the transform. | [optional] 
**is_required** | **bool** | Flag indicating whether or not the attribute is required. | [optional] [default to False]
**type** | **str** | The type of the attribute. | [optional] [default to 'string']
**is_multi_valued** | **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to False]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.field_details_dto import FieldDetailsDto

field_details_dto = FieldDetailsDto(
name='',
transform={"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}},
attributes={"template":"firstname.lastname.uniqueCounter","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"},
is_required=False,
type='string',
is_multi_valued=False
)

```
[[Back to top]](#) 

