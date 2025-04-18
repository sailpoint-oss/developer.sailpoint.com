---
id: v2025-permission-dto
title: PermissionDto
pagination_label: PermissionDto
sidebar_label: PermissionDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PermissionDto', 'V2025PermissionDto'] 
slug: /tools/sdk/python/v2025/models/permission-dto
tags: ['SDK', 'Software Development Kit', 'PermissionDto', 'V2025PermissionDto']
---

# PermissionDto

Simplified DTO for the Permission objects stored in SailPoint's database. The data is aggregated from customer systems and is free-form, so its appearance can vary largely between different clients/customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **[]str** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**target** | **str** | The target the permission would grants rights on. | [optional] [readonly] 
}

## Example

```python
from sailpoint.v2025.models.permission_dto import PermissionDto

permission_dto = PermissionDto(
rights=HereIsRight1,
target='SYS.GV_$TRANSACTION'
)

```
[[Back to top]](#) 

