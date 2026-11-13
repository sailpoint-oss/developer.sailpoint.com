# RoleMiningSessionParametersDto

# RoleMiningSessionParametersDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the role mining session | [optional] 
**name** | **str** | The session's saved name | [optional] 
**min_num_identities_in_potential_role** | **int** | Minimum number of identities in a potential role | [optional] 
**prune_threshold** | **int** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**saved** | **bool** | The session's saved status | [optional] [default to True]
**scope** | [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**type** | **RoleMiningRoleType** |  | [optional] 
**state** | **RoleMiningSessionState** |  | [optional] 
**scoping_method** | **RoleMiningSessionScopingMethod** |  | [optional] 
\}

## Example

```python
from sailpoint.iai_role_mining.models.role_mining_session_parameters_dto import RoleMiningSessionParametersDto

role_mining_session_parameters_dto = RoleMiningSessionParametersDto(
id='9f36f5e5-1e81-4eca-b087-548959d91c71',
name='Saved RM Session - 07/10',
min_num_identities_in_potential_role=20,
prune_threshold=5,
saved=True,
scope=sailpoint.iai_role_mining.models.role_mining_session_scope.Role Mining Session Scope(
                    identity_ids = ["2c918090761a5aac0176215c46a62d58","2c918090761a5aac01722015c46a62d42"], 
                    criteria = 'source.name:DataScienceDataset', 
                    attribute_filter_criteria = {"displayName":{"untranslated":"Location: Miami"},"ariaLabel":{"untranslated":"Location: Miami"},"data":{"displayName":{"translateKey":"IDN.IDENTITY_ATTRIBUTES.LOCATION"},"name":"location","operator":"EQUALS","values":["Miami"]}}, ),
type='SPECIALIZED',
state='CREATED',
scoping_method='MANUAL'
)

```
[[Back to top]](#) 

