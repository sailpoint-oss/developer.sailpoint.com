---
id: beta-violation-owner-assignment-config
title: ViolationOwnerAssignmentConfig
pagination_label: ViolationOwnerAssignmentConfig
sidebar_label: ViolationOwnerAssignmentConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationOwnerAssignmentConfig', 'BetaViolationOwnerAssignmentConfig'] 
slug: /tools/sdk/python/beta/models/violation-owner-assignment-config
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfig', 'BetaViolationOwnerAssignmentConfig']
---

# ViolationOwnerAssignmentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_rule** |  **Enum** [  'MANAGER',    'STATIC' ] | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**owner_ref** | [**ViolationOwnerAssignmentConfigOwnerRef**](violation-owner-assignment-config-owner-ref) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.violation_owner_assignment_config import ViolationOwnerAssignmentConfig

violation_owner_assignment_config = ViolationOwnerAssignmentConfig(
assignment_rule='MANAGER',
owner_ref=sailpoint.beta.models.violation_owner_assignment_config_owner_ref.ViolationOwnerAssignmentConfig_ownerRef(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', )
)

```
[[Back to top]](#) 

