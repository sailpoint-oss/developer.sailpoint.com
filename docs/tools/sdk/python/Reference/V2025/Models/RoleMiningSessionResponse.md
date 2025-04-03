---
id: v2025-role-mining-session-response
title: RoleMiningSessionResponse
pagination_label: RoleMiningSessionResponse
sidebar_label: RoleMiningSessionResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningSessionResponse', 'V2025RoleMiningSessionResponse'] 
slug: /tools/sdk/python/v2025/models/role-mining-session-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponse', 'V2025RoleMiningSessionResponse']
---

# RoleMiningSessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**min_num_identities_in_potential_role** | **int** | Minimum number of identities in a potential role | [optional] 
**scoping_method** | **str** | The scoping method of the role mining session | [optional] 
**prescribed_prune_threshold** | **int** | The computed (or prescribed) prune threshold for this session | [optional] 
**prune_threshold** | **int** | The prune threshold to be used for this role mining session | [optional] 
**potential_role_count** | **int** | The number of potential roles | [optional] 
**potential_roles_ready_count** | **int** | The number of potential roles which have completed processing | [optional] 
**status** | [**RoleMiningSessionStatus**](role-mining-session-status) |  | [optional] 
**email_recipient_id** | **str** | The id of the user who will receive an email about the role mining session | [optional] 
**created_by** | [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**identity_count** | **int** | The number of identities | [optional] 
**saved** | **bool** | The session's saved status | [optional] [default to False]
**name** | **str** | The session's saved name | [optional] 
**data_file_path** | **str** | The data file path of the role mining session | [optional] 
**id** | **str** | Session Id for this role mining session | [optional] 
**created_date** | **datetime** | The date-time when this role mining session was created. | [optional] 
**modified_date** | **datetime** | The date-time when this role mining session was completed. | [optional] 
**type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_mining_session_response import RoleMiningSessionResponse

role_mining_session_response = RoleMiningSessionResponse(
scope=sailpoint.v2025.models.role_mining_session_scope.RoleMiningSessionScope(
                    identity_ids = [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42], 
                    criteria = 'source.name:DataScienceDataset', 
                    attribute_filter_criteria = {displayName={untranslated=Location: Miami}, ariaLabel={untranslated=Location: Miami}, data={displayName={translateKey=IDN.IDENTITY_ATTRIBUTES.LOCATION}, name=location, operator=EQUALS, values=[Miami]}}, ),
min_num_identities_in_potential_role=20,
scoping_method='AUTO_RM',
prescribed_prune_threshold=83,
prune_threshold=70,
potential_role_count=8,
potential_roles_ready_count=4,
status=sailpoint.v2025.models.role_mining_session_status.RoleMiningSessionStatus(
                    state = 'CREATED', ),
email_recipient_id='',
created_by=,
identity_count=39,
saved=True,
name='Saved RM Session - 07/10',
data_file_path='',
id='8c190e67-87aa-4ed9-a90b-d9d5344523fb',
created_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
modified_date=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
type='SPECIALIZED'
)

```
[[Back to top]](#) 

