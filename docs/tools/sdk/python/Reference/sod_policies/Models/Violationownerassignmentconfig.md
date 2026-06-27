---
id: violationownerassignmentconfig
title: Violationownerassignmentconfig
pagination_label: Violationownerassignmentconfig
sidebar_label: Violationownerassignmentconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Violationownerassignmentconfig', 'Violationownerassignmentconfig'] 
slug: /tools/sdk/python/sod-policies/models/violationownerassignmentconfig
tags: ['SDK', 'Software Development Kit', 'Violationownerassignmentconfig', 'Violationownerassignmentconfig']
---

# Violationownerassignmentconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_rule** |  **Enum** [  'MANAGER',    'STATIC' ] | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**owner_ref** | [**ViolationownerassignmentconfigOwnerRef**](violationownerassignmentconfig-owner-ref) |  | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.violationownerassignmentconfig import Violationownerassignmentconfig

violationownerassignmentconfig = Violationownerassignmentconfig(
assignment_rule='MANAGER',
owner_ref=sailpoint.sod_policies.models.violationownerassignmentconfig_owner_ref.violationownerassignmentconfig_ownerRef(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', )
)

```
[[Back to top]](#) 

