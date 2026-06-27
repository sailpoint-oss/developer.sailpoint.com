---
id: accessconstraint
title: Accessconstraint
pagination_label: Accessconstraint
sidebar_label: Accessconstraint
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessconstraint', 'Accessconstraint'] 
slug: /tools/sdk/python/certification-campaigns/models/accessconstraint
tags: ['SDK', 'Software Development Kit', 'Accessconstraint', 'Accessconstraint']
---

# Accessconstraint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Type of Access | [required]
**ids** | **[]str** | Must be set only if operator is SELECTED. | [optional] 
**operator** |  **Enum** [  'ALL',    'SELECTED' ] | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [required]
}

## Example

```python
from sailpoint.certification_campaigns.models.accessconstraint import Accessconstraint

accessconstraint = Accessconstraint(
type='ENTITLEMENT',
ids=["2c90ad2a70ace7d50170acf22ca90010"],
operator='SELECTED'
)

```
[[Back to top]](#) 

