---
id: sod-policy-read
title: SodPolicyRead
pagination_label: SodPolicyRead
sidebar_label: SodPolicyRead
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicyRead', 'SodPolicyRead'] 
slug: /tools/sdk/python/v3/models/sod-policy-read
tags: ['SDK', 'Software Development Kit', 'SodPolicyRead', 'SodPolicyRead']
---

# SodPolicyRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Policy id | [optional] [readonly] 
**name** | **str** | Policy Business Name | [optional] 
**created** | **datetime** | The time when this SOD policy is created. | [optional] [readonly] 
**modified** | **datetime** | The time when this SOD policy is modified. | [optional] [readonly] 
**description** | **str** | Optional description of the SOD policy | [optional] 
**owner_ref** | [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**external_policy_reference** | **str** | Optional External Policy Reference | [optional] 
**policy_query** | **str** | Search query of the SOD policy | [optional] 
**compensating_controls** | **str** | Optional compensating controls(Mitigating Controls) | [optional] 
**correction_advice** | **str** | Optional correction advice | [optional] 
**state** |  **Enum** [  'ENFORCED',    'NOT_ENFORCED' ] | whether the policy is enforced or not | [optional] 
**tags** | **[]str** | tags for this policy object | [optional] 
**creator_id** | **str** | Policy's creator ID | [optional] [readonly] 
**modifier_id** | **str** | Policy's modifier ID | [optional] [readonly] 
**violation_owner_assignment_config** | [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**scheduled** | **bool** | defines whether a policy has been scheduled or not | [optional] [default to False]
**type** |  **Enum** [  'GENERAL',    'CONFLICTING_ACCESS_BASED' ] | whether a policy is query based or conflicting access based | [optional] [default to 'GENERAL']
**conflicting_access_criteria** | [**SodPolicyReadAllOfConflictingAccessCriteria**](sod-policy-read-all-of-conflicting-access-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.sod_policy_read import SodPolicyRead

sod_policy_read = SodPolicyRead(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='policy-xyz',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
description='This policy ensures compliance of xyz',
owner_ref=sailpoint.v3.models.sod_policy_owner_ref.SodPolicy_ownerRef(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
external_policy_reference='XYZ policy',
policy_query='@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)',
compensating_controls='Have a manager review the transaction decisions for their "out of compliance" employee',
correction_advice='Based on the role of the employee, managers should remove access that is not required for their job function.',
state='ENFORCED',
tags=[TAG1, TAG2],
creator_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
modifier_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
violation_owner_assignment_config=sailpoint.v3.models.violation_owner_assignment_config.ViolationOwnerAssignmentConfig(
                    assignment_rule = 'MANAGER', 
                    owner_ref = sailpoint.v3.models.violation_owner_assignment_config_owner_ref.ViolationOwnerAssignmentConfig_ownerRef(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Support', ), ),
scheduled=True,
type='GENERAL',
conflicting_access_criteria=
)

```
[[Back to top]](#) 

