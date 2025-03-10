---
id: beta-multi-host-integrations-management-workgroup
title: MultiHostIntegrationsManagementWorkgroup
pagination_label: MultiHostIntegrationsManagementWorkgroup
sidebar_label: MultiHostIntegrationsManagementWorkgroup
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationsManagementWorkgroup', 'BetaMultiHostIntegrationsManagementWorkgroup'] 
slug: /tools/sdk/python/beta/models/multi-host-integrations-management-workgroup
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsManagementWorkgroup', 'BetaMultiHostIntegrationsManagementWorkgroup']
---

# MultiHostIntegrationsManagementWorkgroup

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
from sailpoint.beta.models.multi_host_integrations_management_workgroup import MultiHostIntegrationsManagementWorkgroup

multi_host_integrations_management_workgroup = MultiHostIntegrationsManagementWorkgroup(
type='GOVERNANCE_GROUP',
id='2c91808568c529c60168cca6f90c2222',
name='My Management Workgroup'
)

```
[[Back to top]](#) 

