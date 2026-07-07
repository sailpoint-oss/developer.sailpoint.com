---
id: multihostintegrations-management-workgroup
title: MultihostintegrationsManagementWorkgroup
pagination_label: MultihostintegrationsManagementWorkgroup
sidebar_label: MultihostintegrationsManagementWorkgroup
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsManagementWorkgroup', 'MultihostintegrationsManagementWorkgroup'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-management-workgroup
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsManagementWorkgroup', 'MultihostintegrationsManagementWorkgroup']
---

# MultihostintegrationsManagementWorkgroup

Reference to management workgroup for the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP' ] | Type of object being referenced. | [optional] 
**id** | **str** | Management workgroup ID. | [optional] 
**name** | **str** | Management workgroup's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_management_workgroup import MultihostintegrationsManagementWorkgroup

multihostintegrations_management_workgroup = MultihostintegrationsManagementWorkgroup(
type='GOVERNANCE_GROUP',
id='2c91808568c529c60168cca6f90c2222',
name='My Management Workgroup'
)

```
[[Back to top]](#) 

