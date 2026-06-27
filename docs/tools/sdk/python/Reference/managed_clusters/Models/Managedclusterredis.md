---
id: managedclusterredis
title: Managedclusterredis
pagination_label: Managedclusterredis
sidebar_label: Managedclusterredis
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclusterredis', 'Managedclusterredis'] 
slug: /tools/sdk/python/managed-clusters/models/managedclusterredis
tags: ['SDK', 'Software Development Kit', 'Managedclusterredis', 'Managedclusterredis']
---

# Managedclusterredis

Managed Cluster Redis Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redis_host** | **str** | ManagedCluster redisHost | [optional] 
**redis_port** | **int** | ManagedCluster redisPort | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedclusterredis import Managedclusterredis

managedclusterredis = Managedclusterredis(
redis_host='megapod-useast1-shared-redis.cloud.sailpoint.com',
redis_port=6379
)

```
[[Back to top]](#) 

