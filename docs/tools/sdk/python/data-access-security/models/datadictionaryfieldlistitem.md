# Datadictionaryfieldlistitem

# Datadictionaryfieldlistitem

A custom data dictionary field used for permission and identity collector mappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique field name. | [required]
**field_type** | **str** | The field data type. Custom fields are always String. | [required]
**data_dictionary_type** |  **Enum** [  'Users',    'Roles',    'Permission Types',    'Business Resources' ] | The data dictionary that owns this field. | [required]
**required** | **bool** | Whether the field is required. Custom fields returned by list are always false. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.datadictionaryfieldlistitem import Datadictionaryfieldlistitem

datadictionaryfieldlistitem = Datadictionaryfieldlistitem(
name='Department',
field_type='String',
data_dictionary_type='Users',
required=False
)

```
[[Back to top]](#) 

