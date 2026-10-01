# FormSubmittedCreatedBy

# FormSubmittedCreatedBy

Origin of the form creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WORKFLOW_EXECUTION',    'SOURCE' ] | Form creation origin's type. | [required]
**id** | **str** | Unique identifier of the origin of the form creation. | [required]
\}

## Example

```python
from sailpoint.triggers.models.form_submitted_created_by import FormSubmittedCreatedBy

form_submitted_created_by = FormSubmittedCreatedBy(
type='WORKFLOW_EXECUTION',
id='2c9180845d1edece015d27a9717c3e19'
)

```
[[Back to top]](#) 

