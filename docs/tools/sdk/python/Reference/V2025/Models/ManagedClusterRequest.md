---
id: v2025-managed-cluster-request
title: ManagedClusterRequest
pagination_label: ManagedClusterRequest
sidebar_label: ManagedClusterRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClusterRequest', 'V2025ManagedClusterRequest'] 
slug: /tools/sdk/python/v2025/models/managed-cluster-request
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRequest', 'V2025ManagedClusterRequest']
---

# ManagedClusterRequest

Request to create Managed Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | ManagedCluster name | [required]
**type** | [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**configuration** | **map[string]str** | ManagedProcess configuration map | [optional] 
**description** | **str** | ManagedCluster description | [optional] 
}

## Example

```python
from sailpoint.v2025.models.managed_cluster_request import ManagedClusterRequest

managed_cluster_request = ManagedClusterRequest(
name='Managed Cluster Name',
type='idn',
configuration={clusterExternalId=externalId, ccgVersion=77.0.0},
description='A short description of the managed cluster.'
)

```
[[Back to top]](#) 

