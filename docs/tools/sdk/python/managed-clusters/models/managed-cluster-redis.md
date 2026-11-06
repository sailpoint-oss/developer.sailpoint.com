# ManagedClusterRedis

# ManagedClusterRedis

Managed Cluster Redis Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redis_host** | **str** | ManagedCluster redisHost | [optional] 
**redis_port** | **int** | ManagedCluster redisPort | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.managed_cluster_redis import ManagedClusterRedis

managed_cluster_redis = ManagedClusterRedis(
redis_host='megapod-useast1-shared-redis.cloud.sailpoint.com',
redis_port=6379
)

```
[[Back to top]](#) 

