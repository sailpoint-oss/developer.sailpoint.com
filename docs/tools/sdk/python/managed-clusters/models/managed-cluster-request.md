# ManagedClusterRequest

# ManagedClusterRequest

Request to create Managed Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | ManagedCluster name | [required]
**type** | **ManagedClusterTypes** |  | [optional] 
**configuration** | **map[string]str** | ManagedProcess configuration map | [optional] 
**description** | **str** | ManagedCluster description | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.managed_cluster_request import ManagedClusterRequest

managed_cluster_request = ManagedClusterRequest(
name='Managed Cluster Name',
type='idn',
configuration={"clusterExternalId":"externalId","ccgVersion":"77.0.0"},
description='A short description of the managed cluster.'
)

```
[[Back to top]](#) 

