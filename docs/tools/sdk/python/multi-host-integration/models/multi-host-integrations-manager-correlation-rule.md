# MultiHostIntegrationsManagerCorrelationRule

# MultiHostIntegrationsManagerCorrelationRule

Reference to the ManagerCorrelationRule. Only use this rule when a simple filter isn't sufficient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Type of object being referenced. | [optional] 
**id** | **str** | Rule ID. | [optional] 
**name** | **str** | Rule's human-readable display name. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_manager_correlation_rule import MultiHostIntegrationsManagerCorrelationRule

multi_host_integrations_manager_correlation_rule = MultiHostIntegrationsManagerCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

