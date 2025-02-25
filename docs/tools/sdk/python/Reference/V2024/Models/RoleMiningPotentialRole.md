---
id: v2024-role-mining-potential-role
title: RoleMiningPotentialRole
pagination_label: RoleMiningPotentialRole
sidebar_label: RoleMiningPotentialRole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningPotentialRole', 'V2024RoleMiningPotentialRole'] 
slug: /tools/sdk/python/v2024/models/role-mining-potential-role
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRole', 'V2024RoleMiningPotentialRole']
---

# RoleMiningPotentialRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**density** | **int** | The density of a potential role. | [optional] 
**description** | **str** | The description of a potential role. | [optional] 
**entitlement_count** | **int** | The number of entitlements in a potential role. | [optional] 
**excluded_entitlements** | **[]str** | The list of entitlement ids to be excluded. | [optional] 
**freshness** | **int** | The freshness of a potential role. | [optional] 
**identity_count** | **int** | The number of identities in a potential role. | [optional] 
**identity_distribution** | [**[]RoleMiningIdentityDistribution**](role-mining-identity-distribution) | Identity attribute distribution. | [optional] 
**identity_ids** | **[]str** | The list of ids in a potential role. | [optional] 
**name** | **str** | Name of the potential role. | [optional] 
**provision_state** | [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**quality** | **int** | The quality of a potential role. | [optional] 
**role_id** | **str** | The roleId of a potential role. | [optional] 
**saved** | **bool** | The potential role's saved status. | [optional] 
**session** | [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 
**type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**id** | **str** | Id of the potential role | [optional] 
**created_date** | **datetime** | The date-time when this potential role was created. | [optional] 
**modified_date** | **datetime** | The date-time when this potential role was modified. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_mining_potential_role import RoleMiningPotentialRole

role_mining_potential_role = RoleMiningPotentialRole(
created_by=,
density=75,
description='Potential Role for Accounting dept',
entitlement_count=25,
excluded_entitlements=[07a0b4e2, 13b4e2a0],
freshness=75,
identity_count=25,
identity_distribution=[
                    sailpoint.v2024.models.role_mining_identity_distribution.RoleMiningIdentityDistribution(
                        attribute_name = 'department', 
                        distribution = [{attributeValue=NM Tier 3, count=6}], )
                    ],
identity_ids=[07a0b4e2, 13b4e2a0],
name='Saved Potential Role - 07/10',
provision_state='POTENTIAL',
quality=100,
role_id='07a0b4e2-7a76-44fa-bd0b-c64654b66519',
saved=True,
session=sailpoint.v2024.models.role_mining_session_parameters_dto.RoleMiningSessionParametersDto(
                    id = '9f36f5e5-1e81-4eca-b087-548959d91c71', 
                    name = 'Saved RM Session - 07/10', 
                    min_num_identities_in_potential_role = 20, 
                    prune_threshold = 5, 
                    saved = True, 
                    scope = sailpoint.v2024.models.role_mining_session_scope.RoleMiningSessionScope(
                        identity_ids = [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42], 
                        criteria = 'source.name:DataScienceDataset', 
                        attribute_filter_criteria = {displayName={untranslated=Location: Miami}, ariaLabel={untranslated=Location: Miami}, data={displayName={translateKey=IDN.IDENTITY_ATTRIBUTES.LOCATION}, name=location, operator=EQUALS, values=[Miami]}}, ), 
                    type = 'SPECIALIZED', 
                    state = 'CREATED', 
                    scoping_method = 'MANUAL', ),
type='SPECIALIZED',
id='e0cc5d7d-bf7f-4f81-b2af-8885b09d9923',
created_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
modified_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 

