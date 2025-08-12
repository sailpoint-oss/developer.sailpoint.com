---
id: v2025-approval-config-escalation-config-escalation-chain-inner
title: ApprovalConfigEscalationConfigEscalationChainInner
pagination_label: ApprovalConfigEscalationConfigEscalationChainInner
sidebar_label: ApprovalConfigEscalationConfigEscalationChainInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalConfigEscalationConfigEscalationChainInner', 'V2025ApprovalConfigEscalationConfigEscalationChainInner'] 
slug: /tools/sdk/python/v2025/models/approval-config-escalation-config-escalation-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfigEscalationChainInner', 'V2025ApprovalConfigEscalationConfigEscalationChainInner']
---

# ApprovalConfigEscalationConfigEscalationChainInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_id** | **str** | ID of the escalation chain. | [optional] 
**tier** | **int** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**identity_id** | **str** | Identity ID in the escalation chain. | [optional] 
**identity_type** | **str** | Type of identity in the escalation chain. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_config_escalation_config_escalation_chain_inner import ApprovalConfigEscalationConfigEscalationChainInner

approval_config_escalation_config_escalation_chain_inner = ApprovalConfigEscalationConfigEscalationChainInner(
chain_id='ef85d1a8-41ef-433a-8153-0b1f59e7b26a',
tier=1,
identity_id='fdfda352157d4cc79bb749953131b457',
identity_type='IDENTITY'
)

```
[[Back to top]](#) 

