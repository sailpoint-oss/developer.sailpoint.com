# FormSubmittedSubmittedBy

# FormSubmittedSubmittedBy

Identity who submitted the form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity who submitted the form. | [required]
**id** | **str** | Unique identifier of the identity who submitted the form. | [required]
**name** | **str** | Name of the identity who submitted the form. | [required]
\}

## Example

```python
from sailpoint.triggers.models.form_submitted_submitted_by import FormSubmittedSubmittedBy

form_submitted_submitted_by = FormSubmittedSubmittedBy(
type='IDENTITY',
id='2c9180845d1edece015d27a9717c3e19',
name='Rob.Robertson'
)

```
[[Back to top]](#) 

