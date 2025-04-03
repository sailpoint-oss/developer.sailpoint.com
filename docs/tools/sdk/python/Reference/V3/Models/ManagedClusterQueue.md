---
id: managed-cluster-queue
title: ManagedClusterQueue
pagination_label: ManagedClusterQueue
sidebar_label: ManagedClusterQueue
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClusterQueue', 'ManagedClusterQueue'] 
slug: /tools/sdk/python/v3/models/managed-cluster-queue
tags: ['SDK', 'Software Development Kit', 'ManagedClusterQueue', 'ManagedClusterQueue']
---

# ManagedClusterQueue

Managed Cluster key pair for Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | ManagedCluster queue name | [optional] 
**region** | **str** | ManagedCluster queue aws region | [optional] 
}

## Example

```python
from sailpoint.v3.models.managed_cluster_queue import ManagedClusterQueue

managed_cluster_queue = ManagedClusterQueue(
name='megapod-useast1-denali-lwt-cluster-1533',
region='us-east-1'
)

```
[[Back to top]](#) 

