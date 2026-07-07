---
id: roleminingpotentialrole
title: Roleminingpotentialrole
pagination_label: Roleminingpotentialrole
sidebar_label: Roleminingpotentialrole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingpotentialrole', 'Roleminingpotentialrole'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingpotentialrole
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrole', 'Roleminingpotentialrole']
---

# Roleminingpotentialrole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | [**RoleminingsessionresponseCreatedBy**](roleminingsessionresponse-created-by) |  | [optional] 
**density** | **int** | The density of a potential role. | [optional] 
**description** | **str** | The description of a potential role. | [optional] 
**entitlement_count** | **int** | The number of entitlements in a potential role. | [optional] 
**excluded_entitlements** | **[]str** | The list of entitlement ids to be excluded. | [optional] 
**freshness** | **int** | The freshness of a potential role. | [optional] 
**identity_count** | **int** | The number of identities in a potential role. | [optional] 
**identity_distribution** | [**[]Roleminingidentitydistribution**](roleminingidentitydistribution) | Identity attribute distribution. | [optional] 
**identity_ids** | **[]str** | The list of ids in a potential role. | [optional] 
**identity_group_status** | **str** | The status for this identity group which can be OBTAINED or COMPRESSED | [optional] 
**name** | **str** | Name of the potential role. | [optional] 
**potential_role_ref** | [**RoleminingpotentialrolePotentialRoleRef**](roleminingpotentialrole-potential-role-ref) |  | [optional] 
**provision_state** | [**Roleminingpotentialroleprovisionstate**](roleminingpotentialroleprovisionstate) |  | [optional] 
**quality** | **int** | The quality of a potential role. | [optional] 
**role_id** | **str** | The roleId of a potential role. | [optional] 
**saved** | **bool** | The potential role's saved status. | [optional] [default to False]
**session** | [**Roleminingsessionparametersdto**](roleminingsessionparametersdto) |  | [optional] 
**type** | [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**id** | **str** | Id of the potential role | [optional] 
**created_date** | **datetime** | The date-time when this potential role was created. | [optional] 
**modified_date** | **datetime** | The date-time when this potential role was modified. | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingpotentialrole import Roleminingpotentialrole

roleminingpotentialrole = Roleminingpotentialrole(
created_by=,
density=75,
description='Potential Role for Accounting dept',
entitlement_count=25,
excluded_entitlements=["07a0b4e2","13b4e2a0"],
freshness=75,
identity_count=25,
identity_distribution=[
                    sailpoint.iai_role_mining.models.role_mining_identity_distribution.Role Mining Identity Distribution(
                        attribute_name = 'department', 
                        distribution = [
                            sailpoint.iai_role_mining.models.roleminingidentitydistribution_distribution_inner.roleminingidentitydistribution_distribution_inner(
                                attribute_value = 'NM Tier 3', 
                                count = 6, )
                            ], )
                    ],
identity_ids=["07a0b4e2","13b4e2a0"],
identity_group_status='OBTAINED',
name='Saved Potential Role - 07/10',
potential_role_ref=sailpoint.iai_role_mining.models.roleminingpotentialrole_potential_role_ref.roleminingpotentialrole_potentialRoleRef(
                    id = 'e0cc5d7d-bf7f-4f81-b2af-8885b09d9923', 
                    name = 'Saved Potential Role - 07/10', ),
provision_state=,
quality=100,
role_id='07a0b4e2-7a76-44fa-bd0b-c64654b66519',
saved=True,
session=sailpoint.iai_role_mining.models.role_mining_session_parameters_dto.Role Mining Session Parameters Dto(
                    id = '9f36f5e5-1e81-4eca-b087-548959d91c71', 
                    name = 'Saved RM Session - 07/10', 
                    min_num_identities_in_potential_role = 20, 
                    prune_threshold = 5, 
                    saved = True, 
                    scope = sailpoint.iai_role_mining.models.role_mining_session_scope.Role Mining Session Scope(
                        identity_ids = ["2c918090761a5aac0176215c46a62d58","2c918090761a5aac01722015c46a62d42"], 
                        criteria = 'source.name:DataScienceDataset', 
                        attribute_filter_criteria = {"displayName":{"untranslated":"Location: Miami"},"ariaLabel":{"untranslated":"Location: Miami"},"data":{"displayName":{"translateKey":"IDN.IDENTITY_ATTRIBUTES.LOCATION"},"name":"location","operator":"EQUALS","values":["Miami"]}}, ), 
                    type = 'SPECIALIZED', 
                    state = 'CREATED', 
                    scoping_method = 'MANUAL', ),
type='SPECIALIZED',
id='e0cc5d7d-bf7f-4f81-b2af-8885b09d9923',
created_date='2020-01-01T00:00Z',
modified_date='2020-01-01T00:00Z'
)

```
[[Back to top]](#) 

