# MultiHostIntegrationsCluster

# MultiHostIntegrationsCluster

Reference to the source's associated cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CLUSTER' ] | Type of object being referenced. | [required]
**id** | **str** | Cluster ID. | [required]
**name** | **str** | Cluster's human-readable display name. | [required]
\}

## Example

```python
from sailpoint.multi_host_integration.models.multi_host_integrations_cluster import MultiHostIntegrationsCluster

multi_host_integrations_cluster = MultiHostIntegrationsCluster(
type='CLUSTER',
id='2c9180866166b5b0016167c32ef31a66',
name='Corporate Cluster'
)

```
[[Back to top]](#) 

