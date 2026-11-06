# MultiHostIntegrationsManagerCorrelationMapping

# MultiHostIntegrationsManagerCorrelationMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_attribute_name** | **str** | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager's identity. | [optional] 
**identity_attribute_name** | **str** | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_manager_correlation_mapping import MultiHostIntegrationsManagerCorrelationMapping

multi_host_integrations_manager_correlation_mapping = MultiHostIntegrationsManagerCorrelationMapping(
account_attribute_name='manager',
identity_attribute_name='manager'
)

```
[[Back to top]](#) 

