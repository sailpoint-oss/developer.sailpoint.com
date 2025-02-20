---
id: source-management-workgroup
title: SourceManagementWorkgroup
pagination_label: SourceManagementWorkgroup
sidebar_label: SourceManagementWorkgroup
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceManagementWorkgroup', 'SourceManagementWorkgroup'] 
slug: /tools/sdk/python/v3/models/source-management-workgroup
tags: ['SDK', 'Software Development Kit', 'SourceManagementWorkgroup', 'SourceManagementWorkgroup']
---

# SourceManagementWorkgroup

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
from sailpoint.v3.models.source_management_workgroup import SourceManagementWorkgroup

source_management_workgroup = SourceManagementWorkgroup(
type='GOVERNANCE_GROUP',
id='2c91808568c529c60168cca6f90c2222',
name='My Management Workgroup'
)

```
[[Back to top]](#) 

