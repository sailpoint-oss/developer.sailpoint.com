---
id: managedclusterqueue
title: Managedclusterqueue
pagination_label: Managedclusterqueue
sidebar_label: Managedclusterqueue
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclusterqueue', 'Managedclusterqueue'] 
slug: /tools/sdk/python/managed-clusters/models/managedclusterqueue
tags: ['SDK', 'Software Development Kit', 'Managedclusterqueue', 'Managedclusterqueue']
---

# Managedclusterqueue

Managed Cluster key pair for Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | ManagedCluster queue name | [optional] 
**region** | **str** | ManagedCluster queue aws region | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedclusterqueue import Managedclusterqueue

managedclusterqueue = Managedclusterqueue(
name='megapod-useast1-denali-lwt-cluster-1533',
region='us-east-1'
)

```
[[Back to top]](#) 

