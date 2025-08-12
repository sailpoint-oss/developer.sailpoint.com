---
id: v2025-approval-config-escalation-config
title: ApprovalConfigEscalationConfig
pagination_label: ApprovalConfigEscalationConfig
sidebar_label: ApprovalConfigEscalationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalConfigEscalationConfig', 'V2025ApprovalConfigEscalationConfig'] 
slug: /tools/sdk/python/v2025/models/approval-config-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfig', 'V2025ApprovalConfigEscalationConfig']
---

# ApprovalConfigEscalationConfig

Configuration for escalations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if escalations are enabled. | [optional] [default to False]
**days_until_first_escalation** | **int** | Number of days until the first escalation. | [optional] 
**escalation_cron_schedule** | **str** | Cron schedule for escalations. | [optional] 
**escalation_chain** | [**[]ApprovalConfigEscalationConfigEscalationChainInner**](approval-config-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_config_escalation_config import ApprovalConfigEscalationConfig

approval_config_escalation_config = ApprovalConfigEscalationConfig(
enabled=True,
days_until_first_escalation=2,
escalation_cron_schedule='*/5 * * * *',
escalation_chain=[
                    sailpoint.v2025.models.approval_config_escalation_config_escalation_chain_inner.ApprovalConfig_escalationConfig_escalationChain_inner(
                        chain_id = 'ef85d1a8-41ef-433a-8153-0b1f59e7b26a', 
                        tier = 1, 
                        identity_id = 'fdfda352157d4cc79bb749953131b457', 
                        identity_type = 'IDENTITY', )
                    ]
)

```
[[Back to top]](#) 

