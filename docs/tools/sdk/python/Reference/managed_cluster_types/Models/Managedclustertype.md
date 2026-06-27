---
id: managedclustertype
title: Managedclustertype
pagination_label: Managedclustertype
sidebar_label: Managedclustertype
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclustertype', 'Managedclustertype'] 
slug: /tools/sdk/python/managed-cluster-types/models/managedclustertype
tags: ['SDK', 'Software Development Kit', 'Managedclustertype', 'Managedclustertype']
---

# Managedclustertype

Managed Cluster Type for Cluster upgrade configuration information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ManagedClusterType ID | [optional] [readonly] 
**type** | **str** | ManagedClusterType type name | [required]
**pod** | **str** | ManagedClusterType pod | [required]
**org** | **str** | ManagedClusterType org | [required]
**managed_process_ids** | **[]str** | List of processes for the cluster type | [optional] 
}

## Example

```python
from sailpoint.managed_cluster_types.models.managedclustertype import Managedclustertype

managedclustertype = Managedclustertype(
id='aClusterTypeId',
type='idn',
pod='megapod-useast1',
org='denali-cjh',
managed_process_ids=["someId","someId2"]
)

```
[[Back to top]](#) 

