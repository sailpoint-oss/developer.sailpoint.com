---
id: managedclusterrequest
title: Managedclusterrequest
pagination_label: Managedclusterrequest
sidebar_label: Managedclusterrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclusterrequest', 'Managedclusterrequest'] 
slug: /tools/sdk/python/managed-clusters/models/managedclusterrequest
tags: ['SDK', 'Software Development Kit', 'Managedclusterrequest', 'Managedclusterrequest']
---

# Managedclusterrequest

Request to create Managed Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | ManagedCluster name | [required]
**type** | [**Managedclustertypes**](managedclustertypes) |  | [optional] 
**configuration** | **map[string]str** | ManagedProcess configuration map | [optional] 
**description** | **str** | ManagedCluster description | [optional] 
}

## Example

```python
from sailpoint.managed_clusters.models.managedclusterrequest import Managedclusterrequest

managedclusterrequest = Managedclusterrequest(
name='Managed Cluster Name',
type='idn',
configuration={"clusterExternalId":"externalId","ccgVersion":"77.0.0"},
description='A short description of the managed cluster.'
)

```
[[Back to top]](#) 

