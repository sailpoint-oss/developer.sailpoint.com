# ServiceDeskIntegrationTemplateType

# ServiceDeskIntegrationTemplateType

This represents a Service Desk Integration template type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the type. | [optional] 
**type** | **str** | This is the type value for the type. | [required]
**script_name** | **str** | This is the scriptName attribute value for the type. | [required]
\}

## Example

```python
from sailpoint.service_desk_integration.models.service_desk_integration_template_type import ServiceDeskIntegrationTemplateType

service_desk_integration_template_type = ServiceDeskIntegrationTemplateType(
name='aName',
type='aType',
script_name='aScriptName'
)

```
[[Back to top]](#) 

