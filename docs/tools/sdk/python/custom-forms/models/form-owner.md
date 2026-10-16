# FormOwner

# FormOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**id** | **str** | Unique identifier of the form's owner. | [optional] 
**name** | **str** | Name of the form's owner. | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.form_owner import FormOwner

form_owner = FormOwner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67',
name='Grant Smith'
)

```
[[Back to top]](#) 

