---
id: v2025-role-mining-potential-role-summary
title: RoleMiningPotentialRoleSummary
pagination_label: RoleMiningPotentialRoleSummary
sidebar_label: RoleMiningPotentialRoleSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningPotentialRoleSummary', 'V2025RoleMiningPotentialRoleSummary'] 
slug: /tools/sdk/python/v2025/models/role-mining-potential-role-summary
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSummary', 'V2025RoleMiningPotentialRoleSummary']
---

# RoleMiningPotentialRoleSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the potential role | [optional] 
**name** | **str** | Name of the potential role | [optional] 
**potential_role_ref** | [**RoleMiningPotentialRoleRef**](role-mining-potential-role-ref) |  | [optional] 
**identity_count** | **int** | The number of identities in a potential role. | [optional] 
**entitlement_count** | **int** | The number of entitlements in a potential role. | [optional] 
**identity_group_status** | **str** | The status for this identity group which can be \"REQUESTED\" or \"OBTAINED\" | [optional] 
**provision_state** | [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**role_id** | **str** | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [optional] 
**density** | **int** | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [optional] 
**freshness** | **int** | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [optional] 
**quality** | **int** | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [optional] 
**type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**created_by** | [**RoleMiningPotentialRoleSummaryCreatedBy**](role-mining-potential-role-summary-created-by) |  | [optional] 
**created_date** | **datetime** | The date-time when this potential role was created. | [optional] 
**saved** | **bool** | The potential role's saved status | [optional] [default to False]
**description** | **str** | Description of the potential role | [optional] 
**session** | [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_mining_potential_role_summary import RoleMiningPotentialRoleSummary

role_mining_potential_role_summary = RoleMiningPotentialRoleSummary(
id='e0cc5d7d-bf7f-4f81-b2af-8885b09d9923',
name='Potential Role - e0cc5d',
potential_role_ref=sailpoint.v2025.models.role_mining_potential_role_ref.RoleMiningPotentialRoleRef(
                    id = 'e0cc5d7d-bf7f-4f81-b2af-8885b09d9923', 
                    name = 'Potential Role - e0cc5d', ),
identity_count=25,
entitlement_count=15,
identity_group_status='OBTAINED',
provision_state='POTENTIAL',
role_id='2a4be6fbcf3c4e66b95a0c15ffd591',
density=90,
freshness=70,
quality=80,
type='SPECIALIZED',
created_by=,
created_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
saved=True,
description='',
session=sailpoint.v2025.models.role_mining_session_parameters_dto.RoleMiningSessionParametersDto(
                    id = '9f36f5e5-1e81-4eca-b087-548959d91c71', 
                    name = 'Saved RM Session - 07/10', 
                    min_num_identities_in_potential_role = 20, 
                    prune_threshold = 5, 
                    saved = True, 
                    scope = sailpoint.v2025.models.role_mining_session_scope.RoleMiningSessionScope(
                        identity_ids = [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42], 
                        criteria = 'source.name:DataScienceDataset', 
                        attribute_filter_criteria = {displayName={untranslated=Location: Miami}, ariaLabel={untranslated=Location: Miami}, data={displayName={translateKey=IDN.IDENTITY_ATTRIBUTES.LOCATION}, name=location, operator=EQUALS, values=[Miami]}}, ), 
                    type = 'SPECIALIZED', 
                    state = 'CREATED', 
                    scoping_method = 'MANUAL', )
)

```
[[Back to top]](#) 

