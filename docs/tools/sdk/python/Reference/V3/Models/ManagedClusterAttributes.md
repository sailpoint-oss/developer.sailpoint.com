---
id: managed-cluster-attributes
title: ManagedClusterAttributes
pagination_label: ManagedClusterAttributes
sidebar_label: ManagedClusterAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClusterAttributes', 'ManagedClusterAttributes'] 
slug: /tools/sdk/python/v3/models/managed-cluster-attributes
tags: ['SDK', 'Software Development Kit', 'ManagedClusterAttributes', 'ManagedClusterAttributes']
---

# ManagedClusterAttributes

Managed Cluster Attributes for Cluster Configuration. Supported Cluster Types [sqsCluster, spConnectCluster]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue** | [**ManagedClusterQueue**](managed-cluster-queue) |  | [optional] 
**keystore** | **str** | ManagedCluster keystore for spConnectCluster type | [optional] 
}

## Example

```python
from sailpoint.v3.models.managed_cluster_attributes import ManagedClusterAttributes

managed_cluster_attributes = ManagedClusterAttributes(
queue=sailpoint.v3.models.managed_cluster_queue.ManagedClusterQueue(
                    name = 'megapod-useast1-denali-lwt-cluster-1533', 
                    region = 'us-east-1', ),
keystore='/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW'
)

```
[[Back to top]](#) 

