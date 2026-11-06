# Updatedatadictionaryfieldrequest

# Updatedatadictionaryfieldrequest

Complete data dictionary field representation for [Replace Data Dictionary Field](https://developer.sailpoint.com/docs/api/put-data-dictionary-field-v-1). The server fully replaces the field using this body. For custom fields, `fieldType`, `dataDictionaryType`, and `required` must match the current values; only `name` may change. Built-in fields where `required` is true cannot be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The field name. | [required]
**field_type** | **str** | The field data type. Must match the current value. | [required]
**data_dictionary_type** |  **Enum** [  'Users',    'Roles',    'Permission Types',    'Business Resources' ] | The data dictionary that owns this field. Must match the current value. | [required]
**required** | **bool** | Must match the current value. Custom fields must be false. | [required]
\}

## Example

```python
from sailpoint.data_access_security.models.updatedatadictionaryfieldrequest import Updatedatadictionaryfieldrequest

updatedatadictionaryfieldrequest = Updatedatadictionaryfieldrequest(
name='Cost Center',
field_type='String',
data_dictionary_type='Users',
required=False
)

```
[[Back to top]](#) 

