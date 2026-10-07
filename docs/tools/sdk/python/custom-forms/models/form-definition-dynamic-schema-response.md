# FormDefinitionDynamicSchemaResponse

# FormDefinitionDynamicSchemaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_schema** | **map[string]object** | OutputSchema holds a JSON schema generated dynamically | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.form_definition_dynamic_schema_response import FormDefinitionDynamicSchemaResponse

form_definition_dynamic_schema_response = FormDefinitionDynamicSchemaResponse(
output_schema={"outputSchema":{"$schema":"https://json-schema.org/draft/2020-12/schema","additionalProperties":false,"properties":{"firstName":{"title":"First Name","type":"string"},"fullName":{"title":"Full Name","type":"string"},"lastName":{"title":"Last Name","type":"string"},"startDate":{"format":"date-time","title":"Start Date","type":"string"}},"type":"object"}}
)

```
[[Back to top]](#) 

