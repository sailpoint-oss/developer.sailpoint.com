---
id: approvalconfig-escalation-config-escalation-chain-inner
title: ApprovalconfigEscalationConfigEscalationChainInner
pagination_label: ApprovalconfigEscalationConfigEscalationChainInner
sidebar_label: ApprovalconfigEscalationConfigEscalationChainInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalconfigEscalationConfigEscalationChainInner', 'ApprovalconfigEscalationConfigEscalationChainInner'] 
slug: /tools/sdk/python/approvals/models/approvalconfig-escalation-config-escalation-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigEscalationConfigEscalationChainInner', 'ApprovalconfigEscalationConfigEscalationChainInner']
---

# ApprovalconfigEscalationConfigEscalationChainInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier** | **int** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**identity_id** | **str** | Optional Identity ID of the type of identity defined in the 'identityType' field. | [optional] 
**identity_type** |  **Enum** [  'IDENTITY',    'MANAGER_OF',    'ACCOUNT_OWNER',    'MACHINE_ACCOUNT_OWNER',    'MACHINE_IDENTITY_OWNER',    'MANAGER_OF_REQUESTED_TARGET_OWNER',    'MANAGER_OF_MACHINE_IDENTITY_OWNER',    'MANAGER_OF_ACCOUNT_OWNER',    'MANAGER_OF_MACHINE_ACCOUNT_OWNER',    'MANAGER_OF_REQUESTER',    'MANAGER_OF_REQUESTER_OWNER',    'MANAGER_OF_OWNER',    'ACCESS_PROFILE_OWNER',    'APPLICATION_OWNER',    'ENTITLEMENT_OWNER',    'ROLE_OWNER',    'SOURCE_OWNER',    'ACCESS_PROFILE_PRIMARY_OWNER',    'APPLICATION_PRIMARY_OWNER',    'ENTITLEMENT_PRIMARY_OWNER',    'ROLE_PRIMARY_OWNER',    'SOURCE_PRIMARY_OWNER' ] | Type of identityId in the escalation chain. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalconfig_escalation_config_escalation_chain_inner import ApprovalconfigEscalationConfigEscalationChainInner

approvalconfig_escalation_config_escalation_chain_inner = ApprovalconfigEscalationConfigEscalationChainInner(
tier=1,
identity_id='fdfda352157d4cc79bb749953131b457',
identity_type='IDENTITY'
)

```
[[Back to top]](#) 

