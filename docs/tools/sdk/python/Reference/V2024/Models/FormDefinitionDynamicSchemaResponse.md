---
id: v2024-form-definition-dynamic-schema-response
title: FormDefinitionDynamicSchemaResponse
pagination_label: FormDefinitionDynamicSchemaResponse
sidebar_label: FormDefinitionDynamicSchemaResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormDefinitionDynamicSchemaResponse', 'V2024FormDefinitionDynamicSchemaResponse'] 
slug: /tools/sdk/python/v2024/models/form-definition-dynamic-schema-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaResponse', 'V2024FormDefinitionDynamicSchemaResponse']
---

# FormDefinitionDynamicSchemaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_schema** | **map[string]object** | OutputSchema holds a JSON schema generated dynamically | [optional] 
}

## Example

```python
from sailpoint.v2024.models.form_definition_dynamic_schema_response import FormDefinitionDynamicSchemaResponse

form_definition_dynamic_schema_response = FormDefinitionDynamicSchemaResponse(
output_schema={outputSchema={$schema=https://json-schema.org/draft/2020-12/schema, additionalProperties=false, properties={firstName={title=First Name, type=string}, fullName={title=Full Name, type=string}, lastName={title=Last Name, type=string}, startDate={format=date-time, title=Start Date, type=string}}, type=object}}
)

```
[[Back to top]](#) 

