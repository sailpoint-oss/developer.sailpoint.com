---
id: sodpolicy
title: Sodpolicy
pagination_label: Sodpolicy
sidebar_label: Sodpolicy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodpolicy', 'Sodpolicy'] 
slug: /tools/sdk/python/sod-policies/models/sodpolicy
tags: ['SDK', 'Software Development Kit', 'Sodpolicy', 'Sodpolicy']
---

# Sodpolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Policy id | [optional] [readonly] 
**name** | **str** | Policy Business Name | [optional] 
**created** | **datetime** | The time when this SOD policy is created. | [optional] [readonly] 
**modified** | **datetime** | The time when this SOD policy is modified. | [optional] [readonly] 
**description** | **str** | Optional description of the SOD policy | [optional] 
**owner_ref** | [**SodpolicyOwnerRef**](sodpolicy-owner-ref) |  | [optional] 
**external_policy_reference** | **str** | Optional External Policy Reference | [optional] 
**policy_query** | **str** | Search query of the SOD policy | [optional] 
**compensating_controls** | **str** | Optional compensating controls(Mitigating Controls) | [optional] 
**correction_advice** | **str** | Optional correction advice | [optional] 
**state** |  **Enum** [  'ENFORCED',    'NOT_ENFORCED' ] | whether the policy is enforced or not | [optional] 
**tags** | **[]str** | tags for this policy object | [optional] 
**creator_id** | **str** | Policy's creator ID | [optional] [readonly] 
**modifier_id** | **str** | Policy's modifier ID | [optional] [readonly] 
**violation_owner_assignment_config** | [**Violationownerassignmentconfig**](violationownerassignmentconfig) |  | [optional] 
**scheduled** | **bool** | defines whether a policy has been scheduled or not | [optional] [default to False]
**type** |  **Enum** [  'GENERAL',    'CONFLICTING_ACCESS_BASED' ] | whether a policy is query based or conflicting access based | [optional] [default to 'GENERAL']
**conflicting_access_criteria** | [**SodpolicyConflictingAccessCriteria**](sodpolicy-conflicting-access-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.sodpolicy import Sodpolicy

sodpolicy = Sodpolicy(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='policy-xyz',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
description='This policy ensures compliance of xyz',
owner_ref=sailpoint.sod_policies.models.sodpolicy_owner_ref.sodpolicy_ownerRef(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
external_policy_reference='XYZ policy',
policy_query='@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)',
compensating_controls='Have a manager review the transaction decisions for their "out of compliance" employee',
correction_advice='Based on the role of the employee, managers should remove access that is not required for their job function.',
state='ENFORCED',
tags=["TAG1","TAG2"],
creator_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
modifier_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
violation_owner_assignment_config=sailpoint.sod_policies.models.violation_owner_assignment_config.Violation Owner Assignment Config(
                    assignment_rule = 'MANAGER', 
                    owner_ref = sailpoint.sod_policies.models.violationownerassignmentconfig_owner_ref.violationownerassignmentconfig_ownerRef(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Support', ), ),
scheduled=True,
type='GENERAL',
conflicting_access_criteria=
)

```
[[Back to top]](#) 

