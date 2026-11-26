# ManagedClusterAttributes

# ManagedClusterAttributes

Managed Cluster Attributes for Cluster Configuration. Supported Cluster Types [sqsCluster, spConnectCluster]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue** | [**ManagedClusterQueue**](managed-cluster-queue) |  | [optional] 
**keystore** | **str** | ManagedCluster keystore for spConnectCluster type | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.managed_cluster_attributes import ManagedClusterAttributes

managed_cluster_attributes = ManagedClusterAttributes(
queue=sailpoint.managed_clusters.models.managed_cluster_queue.Managed Cluster Queue(
                    name = 'megapod-useast1-denali-lwt-cluster-1533', 
                    region = 'us-east-1', ),
keystore='/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW'
)

```
[[Back to top]](#) 

