# MultiHostIntegrationsCreateSources

# MultiHostIntegrationsCreateSources

This represents sources to be created of same type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Source's human-readable name. | [required]
**description** | **str** | Source's human-readable description. | [optional] 
**connector_attributes** | **map[string]object** | Connector specific configuration. This configuration will differ from type to type. | [optional] 
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_create_sources import MultiHostIntegrationsCreateSources

multi_host_integrations_create_sources = MultiHostIntegrationsCreateSources(
name='My Source',
description='This is the corporate directory.',
connector_attributes={"authType":"SQLAuthentication","url":"jdbc:sqlserver://178.18.41.118:1433","user":"username","driverClass":"com.microsoft.sqlserver.jdbc.SQLServerDriver","maxSourcesPerAggGroup":10,"maxAllowedSources":300}
)

```
[[Back to top]](#) 

