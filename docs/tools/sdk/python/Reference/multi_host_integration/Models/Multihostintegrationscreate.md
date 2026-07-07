---
id: multihostintegrationscreate
title: Multihostintegrationscreate
pagination_label: Multihostintegrationscreate
sidebar_label: Multihostintegrationscreate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Multihostintegrationscreate', 'Multihostintegrationscreate'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrationscreate
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationscreate', 'Multihostintegrationscreate']
---

# Multihostintegrationscreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Multi-Host Integration's human-readable name. | [required]
**description** | **str** | Multi-Host Integration's human-readable description. | [required]
**owner** | [**MultihostintegrationsOwner**](multihostintegrations-owner) |  | [required]
**cluster** | [**MultihostintegrationsCluster**](multihostintegrations-cluster) |  | [optional] 
**connector** | **str** | Connector script name. | [required]
**connector_attributes** | **map[string]object** | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**management_workgroup** | [**MultihostintegrationsManagementWorkgroup**](multihostintegrations-management-workgroup) |  | [optional] 
**created** | **datetime** | Date-time when the source was created | [optional] 
**modified** | **datetime** | Date-time when the source was last modified. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrationscreate import Multihostintegrationscreate

multihostintegrationscreate = Multihostintegrationscreate(
name='My Multi-Host Integration',
description='This is the Multi-Host Integration.',
owner=sailpoint.multi_host_integration.models.multihostintegrations_owner.multihostintegrations_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'MyName', ),
cluster=sailpoint.multi_host_integration.models.multihostintegrations_cluster.multihostintegrations_cluster(
                    type = 'CLUSTER', 
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Corporate Cluster', ),
connector='multihost-microsoft-sql-server',
connector_attributes={"maxSourcesPerAggGroup":10,"maxAllowedSources":300},
management_workgroup=sailpoint.multi_host_integration.models.multihostintegrations_management_workgroup.multihostintegrations_managementWorkgroup(
                    type = 'GOVERNANCE_GROUP', 
                    id = '2c91808568c529c60168cca6f90c2222', 
                    name = 'My Management Workgroup', ),
created='2022-02-08T14:50:03.827Z',
modified='2024-01-23T18:08:50.897Z'
)

```
[[Back to top]](#) 

