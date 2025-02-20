---
id: beta-managed-cluster-queue
title: ManagedClusterQueue
pagination_label: ManagedClusterQueue
sidebar_label: ManagedClusterQueue
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClusterQueue', 'BetaManagedClusterQueue'] 
slug: /tools/sdk/python/beta/models/managed-cluster-queue
tags: ['SDK', 'Software Development Kit', 'ManagedClusterQueue', 'BetaManagedClusterQueue']
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
from sailpoint.beta.models.managed_cluster_queue import ManagedClusterQueue

managed_cluster_queue = ManagedClusterQueue(
name='megapod-useast1-denali-lwt-cluster-1533',
region='us-east-1'
)

```
[[Back to top]](#) 

