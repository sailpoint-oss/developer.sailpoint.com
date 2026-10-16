# FormElementValidationsSet

# FormElementValidationsSet

Set of FormElementValidation items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_type** |  **Enum** [  'REQUIRED',    'MIN_LENGTH',    'MAX_LENGTH',    'REGEX',    'DATE',    'MAX_DATE',    'MIN_DATE',    'LESS_THAN_DATE',    'PHONE',    'EMAIL',    'DATA_SOURCE',    'TEXTAREA' ] | The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc. | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.form_element_validations_set import FormElementValidationsSet

form_element_validations_set = FormElementValidationsSet(
validation_type='REQUIRED'
)

```
[[Back to top]](#) 

