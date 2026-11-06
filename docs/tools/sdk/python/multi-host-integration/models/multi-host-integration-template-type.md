# MultiHostIntegrationTemplateType

# MultiHostIntegrationTemplateType

This represents a Multi-Host Integration template type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the type. | [optional] 
**type** | **str** | This is the type value for the type. | [required]
**script_name** | **str** | This is the scriptName attribute value for the type. | [required]
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integration_template_type import MultiHostIntegrationTemplateType

multi_host_integration_template_type = MultiHostIntegrationTemplateType(
name='aName',
type='aType',
script_name='aScriptName'
)

```
[[Back to top]](#) 

