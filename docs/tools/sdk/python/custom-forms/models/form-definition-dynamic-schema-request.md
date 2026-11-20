# FormDefinitionDynamicSchemaRequest

# FormDefinitionDynamicSchemaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**FormDefinitionDynamicSchemaRequestAttributes**](form-definition-dynamic-schema-request-attributes) |  | [optional] 
**description** | **str** | Description is the form definition dynamic schema description text | [optional] 
**id** | **str** | ID is a unique identifier | [optional] 
**type** | **str** | Type is the form definition dynamic schema type | [optional] 
**version_number** | **int** | VersionNumber is the form definition dynamic schema version number | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.form_definition_dynamic_schema_request import FormDefinitionDynamicSchemaRequest

form_definition_dynamic_schema_request = FormDefinitionDynamicSchemaRequest(
attributes=sailpoint.custom_forms.models.form_definition_dynamic_schema_request_attributes.FormDefinitionDynamicSchemaRequest_attributes(
                    form_definition_id = '00000000-0000-0000-0000-000000000000', ),
description='A description',
id='00000000-0000-0000-0000-000000000000',
type='action',
version_number=1
)

```
[[Back to top]](#) 

