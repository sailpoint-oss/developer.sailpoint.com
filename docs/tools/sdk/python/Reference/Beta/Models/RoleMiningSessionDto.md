---
id: beta-role-mining-session-dto
title: RoleMiningSessionDto
pagination_label: RoleMiningSessionDto
sidebar_label: RoleMiningSessionDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningSessionDto', 'BetaRoleMiningSessionDto'] 
slug: /tools/sdk/python/beta/models/role-mining-session-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDto', 'BetaRoleMiningSessionDto']
---

# RoleMiningSessionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**prune_threshold** | **int** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**prescribed_prune_threshold** | **int** | The calculated prescribedPruneThreshold | [optional] 
**min_num_identities_in_potential_role** | **int** | Minimum number of identities in a potential role | [optional] 
**potential_role_count** | **int** | Number of potential roles | [optional] 
**potential_roles_ready_count** | **int** | Number of potential roles ready | [optional] 
**type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**email_recipient_id** | **str** | The id of the user who will receive an email about the role mining session | [optional] 
**identity_count** | **int** | Number of identities in the population which meet the search criteria or identity list provided | [optional] 
**saved** | **bool** | The session's saved status | [optional] [default to False]
**name** | **str** | The session's saved name | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_mining_session_dto import RoleMiningSessionDto

role_mining_session_dto = RoleMiningSessionDto(
scope=sailpoint.beta.models.role_mining_session_scope.Role Mining Session Scope(
                    identity_ids = [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42], 
                    criteria = 'source.name:DataScienceDataset', 
                    attribute_filter_criteria = {displayName={untranslated=Location: Miami}, ariaLabel={untranslated=Location: Miami}, data={displayName={translateKey=IDN.IDENTITY_ATTRIBUTES.LOCATION}, name=location, operator=EQUALS, values=[Miami]}}, ),
prune_threshold=50,
prescribed_prune_threshold=10,
min_num_identities_in_potential_role=20,
potential_role_count=0,
potential_roles_ready_count=0,
type='SPECIALIZED',
email_recipient_id='2c918090761a5aac0176215c46a62d58',
identity_count=0,
saved=True,
name='Saved RM Session - 07/10'
)

```
[[Back to top]](#) 

