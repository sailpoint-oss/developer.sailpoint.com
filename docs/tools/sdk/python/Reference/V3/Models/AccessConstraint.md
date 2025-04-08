---
id: access-constraint
title: AccessConstraint
pagination_label: AccessConstraint
sidebar_label: AccessConstraint
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessConstraint', 'AccessConstraint'] 
slug: /tools/sdk/python/v3/models/access-constraint
tags: ['SDK', 'Software Development Kit', 'AccessConstraint', 'AccessConstraint']
---

# AccessConstraint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Type of Access | [required]
**ids** | **[]str** | Must be set only if operator is SELECTED. | [optional] 
**operator** |  **Enum** [  'ALL',    'SELECTED' ] | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [required]
}

## Example

```python
from sailpoint.v3.models.access_constraint import AccessConstraint

access_constraint = AccessConstraint(
type='ENTITLEMENT',
ids=[2c90ad2a70ace7d50170acf22ca90010],
operator='SELECTED'
)

```
[[Back to top]](#) 

