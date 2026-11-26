# MultiHostIntegrationsAccountCorrelationRule

# MultiHostIntegrationsAccountCorrelationRule

Reference to a rule that can do COMPLEX correlation. Only use this rule when you can't use accountCorrelationConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'RULE' ] | Type of object being referenced. | [optional] 
**id** | **str** | Rule ID. | [optional] 
**name** | **str** | Rule's human-readable display name. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_account_correlation_rule import MultiHostIntegrationsAccountCorrelationRule

multi_host_integrations_account_correlation_rule = MultiHostIntegrationsAccountCorrelationRule(
type='RULE',
id='2c918085708c274401708c2a8a760001',
name='Example Rule'
)

```
[[Back to top]](#) 

