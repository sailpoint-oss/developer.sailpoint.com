---
id: beta-multi-host-integrations-cluster
title: MultiHostIntegrationsCluster
pagination_label: MultiHostIntegrationsCluster
sidebar_label: MultiHostIntegrationsCluster
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsCluster', 'BetaMultiHostIntegrationsCluster'] 
slug: /tools/sdk/python/beta/models/multi-host-integrations-cluster
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCluster', 'BetaMultiHostIntegrationsCluster']
---

# MultiHostIntegrationsCluster

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
from sailpoint.beta.models.multi_host_integrations_cluster import MultiHostIntegrationsCluster

multi_host_integrations_cluster = MultiHostIntegrationsCluster(
type='CLUSTER',
id='2c9180866166b5b0016167c32ef31a66',
name='Corporate Cluster'
)

```
[[Back to top]](#) 

