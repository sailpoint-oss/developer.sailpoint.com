---
id: v2024-role-mining-potential-role-export-response
title: RoleMiningPotentialRoleExportResponse
pagination_label: RoleMiningPotentialRoleExportResponse
sidebar_label: RoleMiningPotentialRoleExportResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningPotentialRoleExportResponse', 'V2024RoleMiningPotentialRoleExportResponse'] 
slug: /tools/sdk/python/v2024/models/role-mining-potential-role-export-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportResponse', 'V2024RoleMiningPotentialRoleExportResponse']
---

# RoleMiningPotentialRoleExportResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_entitlement_popularity** | **int** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**include_common_access** | **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**export_id** | **str** | ID used to reference this export | [optional] 
**status** | [**RoleMiningPotentialRoleExportState**](role-mining-potential-role-export-state) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_mining_potential_role_export_response import RoleMiningPotentialRoleExportResponse

role_mining_potential_role_export_response = RoleMiningPotentialRoleExportResponse(
min_entitlement_popularity=0,
include_common_access=True,
export_id='0c6cdb76-1227-4aaf-af21-192dbdfbfa04',
status='QUEUED'
)

```
[[Back to top]](#) 

