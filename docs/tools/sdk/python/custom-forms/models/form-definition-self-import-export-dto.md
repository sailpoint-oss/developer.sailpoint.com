# FormDefinitionSelfImportExportDto

# FormDefinitionSelfImportExportDto

Self block for imported/exported object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'FORM_DEFINITION' ] | Imported/exported object's DTO type. | [optional] 
**id** | **str** | Imported/exported object's ID. | [optional] 
**name** | **str** | Imported/exported object's display name. | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.form_definition_self_import_export_dto import FormDefinitionSelfImportExportDto

form_definition_self_import_export_dto = FormDefinitionSelfImportExportDto(
type='FORM_DEFINITION',
id='2c9180835d191a86015d28455b4b232a',
name='Temporary User Level Permissions - Requester'
)

```
[[Back to top]](#) 

