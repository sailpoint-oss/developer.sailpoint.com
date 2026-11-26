# MultiHostIntegrationsOwner

# MultiHostIntegrationsOwner

Reference to identity object who owns the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Owner identity's ID. | [optional] 
**name** | **str** | Owner identity's human-readable display name. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_owner import MultiHostIntegrationsOwner

multi_host_integrations_owner = MultiHostIntegrationsOwner(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='MyName'
)

```
[[Back to top]](#) 

