# ApprovalConfigEscalationConfigEscalationChainInner

# ApprovalConfigEscalationConfigEscalationChainInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Optional Identity ID of the type of identity defined in the 'identityType' field. | [optional] 
**identity_type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP',    'MANAGER_OF',    'ACCOUNT_OWNER',    'MACHINE_ACCOUNT_OWNER',    'MACHINE_IDENTITY_OWNER',    'MANAGER_OF_REQUESTED_TARGET_OWNER',    'MANAGER_OF_MACHINE_IDENTITY_OWNER',    'MANAGER_OF_ACCOUNT_OWNER',    'MANAGER_OF_MACHINE_ACCOUNT_OWNER',    'MANAGER_OF_REQUESTER',    'MANAGER_OF_REQUESTER_OWNER',    'MANAGER_OF_OWNER',    'ACCESS_PROFILE_OWNER',    'APPLICATION_OWNER',    'ENTITLEMENT_OWNER',    'ROLE_OWNER',    'SOURCE_OWNER',    'REQUESTED_TARGET_OWNER',    'ACCESS_PROFILE_PRIMARY_OWNER',    'APPLICATION_PRIMARY_OWNER',    'ENTITLEMENT_PRIMARY_OWNER',    'ROLE_PRIMARY_OWNER',    'SOURCE_PRIMARY_OWNER',    'ACCOUNT_PRIMARY_OWNER',    'MACHINE_ACCOUNT_PRIMARY_OWNER',    'MACHINE_IDENTITY_PRIMARY_OWNER',    'REQUESTED_TARGET_PRIMARY_OWNER',    'ACCESS_PROFILE_SECONDARY_OWNER_GROUP',    'APPLICATION_SECONDARY_OWNER_GROUP',    'ENTITLEMENT_SECONDARY_OWNER_GROUP',    'ROLE_SECONDARY_OWNER_GROUP',    'SOURCE_SECONDARY_OWNER_GROUP',    'ACCOUNT_SECONDARY_OWNER_GROUP',    'MACHINE_ACCOUNT_SECONDARY_OWNER_GROUP',    'MACHINE_IDENTITY_SECONDARY_OWNER_GROUP',    'REQUESTED_TARGET_SECONDARY_OWNER_GROUP',    'ACCESS_PROFILE_ALL_OWNER_GROUP',    'APPLICATION_ALL_OWNER_GROUP',    'ENTITLEMENT_ALL_OWNER_GROUP',    'ROLE_ALL_OWNER_GROUP',    'SOURCE_ALL_OWNER_GROUP',    'ACCOUNT_ALL_OWNER_GROUP',    'MACHINE_ACCOUNT_ALL_OWNER_GROUP',    'MACHINE_IDENTITY_ALL_OWNER_GROUP',    'REQUESTED_TARGET_ALL_OWNER_GROUP' ] | Type of identityId in the escalation chain. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_config_escalation_config_escalation_chain_inner import ApprovalConfigEscalationConfigEscalationChainInner

approval_config_escalation_config_escalation_chain_inner = ApprovalConfigEscalationConfigEscalationChainInner(
identity_id='fdfda352157d4cc79bb749953131b457',
identity_type='IDENTITY'
)

```
[[Back to top]](#) 

