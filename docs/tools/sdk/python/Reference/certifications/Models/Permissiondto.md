---
id: permissiondto
title: Permissiondto
pagination_label: Permissiondto
sidebar_label: Permissiondto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Permissiondto', 'Permissiondto'] 
slug: /tools/sdk/python/certifications/models/permissiondto
tags: ['SDK', 'Software Development Kit', 'Permissiondto', 'Permissiondto']
---

# Permissiondto

Simplified DTO for the Permission objects stored in SailPoint's database. The data is aggregated from customer systems and is free-form, so its appearance can vary largely between different clients/customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **[]str** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**target** | **str** | The target the permission would grants rights on. | [optional] [readonly] 
}

## Example

```python
from sailpoint.certifications.models.permissiondto import Permissiondto

permissiondto = Permissiondto(
rights=HereIsRight1,
target='SYS.GV_$TRANSACTION'
)

```
[[Back to top]](#) 

