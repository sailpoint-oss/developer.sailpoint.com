---
id: managed-cluster-redis
title: ManagedClusterRedis
pagination_label: ManagedClusterRedis
sidebar_label: ManagedClusterRedis
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClusterRedis', 'ManagedClusterRedis'] 
slug: /tools/sdk/python/v3/models/managed-cluster-redis
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRedis', 'ManagedClusterRedis']
---

# ManagedClusterRedis

Managed Cluster Redis Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redis_host** | **str** | ManagedCluster redisHost | [optional] 
**redis_port** | **int** | ManagedCluster redisPort | [optional] 
}

## Example

```python
from sailpoint.v3.models.managed_cluster_redis import ManagedClusterRedis

managed_cluster_redis = ManagedClusterRedis(
redis_host='megapod-useast1-shared-redis.cloud.sailpoint.com',
redis_port=6379
)

```
[[Back to top]](#) 

