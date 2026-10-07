# MultiHostIntegrationsSchemasInner

# MultiHostIntegrationsSchemasInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CONNECTOR_SCHEMA' ] | Type of object being referenced. | [optional] 
**id** | **str** | Schema ID. | [optional] 
**name** | **str** | Schema's human-readable display name. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_schemas_inner import MultiHostIntegrationsSchemasInner

multi_host_integrations_schemas_inner = MultiHostIntegrationsSchemasInner(
type='CONNECTOR_SCHEMA',
id='2c91808568c529c60168cca6f90c1777',
name='MySchema'
)

```
[[Back to top]](#) 

