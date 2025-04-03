---
id: v2024-source-cluster
title: SourceCluster
pagination_label: SourceCluster
sidebar_label: SourceCluster
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceCluster', 'V2024SourceCluster'] 
slug: /tools/sdk/python/v2024/models/source-cluster
tags: ['SDK', 'Software Development Kit', 'SourceCluster', 'V2024SourceCluster']
---

# SourceCluster

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
from sailpoint.v2024.models.source_cluster import SourceCluster

source_cluster = SourceCluster(
type='CLUSTER',
id='2c9180866166b5b0016167c32ef31a66',
name='Corporate Cluster'
)

```
[[Back to top]](#) 

