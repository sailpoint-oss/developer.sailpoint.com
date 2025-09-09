---
id: v2024-multi-host-integrations-create
title: MultiHostIntegrationsCreate
pagination_label: MultiHostIntegrationsCreate
sidebar_label: MultiHostIntegrationsCreate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsCreate', 'V2024MultiHostIntegrationsCreate'] 
slug: /tools/sdk/python/v2024/models/multi-host-integrations-create
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreate', 'V2024MultiHostIntegrationsCreate']
---

# MultiHostIntegrationsCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Multi-Host Integration's human-readable name. | [required]
**description** | **str** | Multi-Host Integration's human-readable description. | [required]
**owner** | [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | [required]
**cluster** | [**SourceCluster**](source-cluster) |  | [optional] 
**connector** | **str** | Connector script name. | [required]
**connector_attributes** | **map[string]object** | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**management_workgroup** | [**SourceManagementWorkgroup**](source-management-workgroup) |  | [optional] 
**created** | **datetime** | Date-time when the source was created | [optional] 
**modified** | **datetime** | Date-time when the source was last modified. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.multi_host_integrations_create import MultiHostIntegrationsCreate

multi_host_integrations_create = MultiHostIntegrationsCreate(
name='My Multi-Host Integration',
description='This is the Multi-Host Integration.',
owner=sailpoint.v2024.models.multi_host_integrations_owner.MultiHostIntegrations_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'MyName', ),
cluster=sailpoint.v2024.models.source_cluster.Source_cluster(
                    type = 'CLUSTER', 
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Corporate Cluster', ),
connector='multihost-microsoft-sql-server',
connector_attributes={maxSourcesPerAggGroup=10, maxAllowedSources=300},
management_workgroup=sailpoint.v2024.models.source_management_workgroup.Source_managementWorkgroup(
                    type = 'GOVERNANCE_GROUP', 
                    id = '2c91808568c529c60168cca6f90c2222', 
                    name = 'My Management Workgroup', ),
created='2022-02-08T14:50:03.827Z',
modified='2024-01-23T18:08:50.897Z'
)

```
[[Back to top]](#) 

