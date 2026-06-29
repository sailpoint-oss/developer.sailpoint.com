---
id: managedclusterattributes
title: Managedclusterattributes
pagination_label: Managedclusterattributes
sidebar_label: Managedclusterattributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclusterattributes', 'Managedclusterattributes'] 
slug: /tools/sdk/python/managed-clusters/models/managedclusterattributes
tags: ['SDK', 'Software Development Kit', 'Managedclusterattributes', 'Managedclusterattributes']
---

# Managedclusterattributes

Managed Cluster Attributes for Cluster Configuration. Supported Cluster Types [sqsCluster, spConnectCluster]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue** | [**Managedclusterqueue**](managedclusterqueue) |  | [optional] 
**keystore** | **str** | ManagedCluster keystore for spConnectCluster type | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedclusterattributes import Managedclusterattributes

managedclusterattributes = Managedclusterattributes(
queue=sailpoint.managed_clusters.models.managed_cluster_queue.Managed Cluster Queue(
                    name = 'megapod-useast1-denali-lwt-cluster-1533', 
                    region = 'us-east-1', ),
keystore='/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW'
)

```
[[Back to top]](#) 

