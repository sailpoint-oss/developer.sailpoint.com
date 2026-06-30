---
id: multihostintegrations-cluster
title: MultihostintegrationsCluster
pagination_label: MultihostintegrationsCluster
sidebar_label: MultihostintegrationsCluster
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsCluster', 'MultihostintegrationsCluster'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-cluster
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsCluster', 'MultihostintegrationsCluster']
---

# MultihostintegrationsCluster

Reference to the source's associated cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'CLUSTER' ] | Type of object being referenced. | [required]
**id** | **str** | Cluster ID. | [required]
**name** | **str** | Cluster's human-readable display name. | [required]
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_cluster import MultihostintegrationsCluster

multihostintegrations_cluster = MultihostintegrationsCluster(
type='CLUSTER',
id='2c9180866166b5b0016167c32ef31a66',
name='Corporate Cluster'
)

```
[[Back to top]](#) 

