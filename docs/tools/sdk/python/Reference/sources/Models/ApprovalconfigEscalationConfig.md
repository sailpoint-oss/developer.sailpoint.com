---
id: approvalconfig-escalation-config
title: ApprovalconfigEscalationConfig
pagination_label: ApprovalconfigEscalationConfig
sidebar_label: ApprovalconfigEscalationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalconfigEscalationConfig', 'ApprovalconfigEscalationConfig'] 
slug: /tools/sdk/python/sources/models/approvalconfig-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigEscalationConfig', 'ApprovalconfigEscalationConfig']
---

# ApprovalconfigEscalationConfig

Configuration for escalations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if escalations are enabled. | [optional] [default to False]
**days_until_first_escalation** | **int** | Number of days until the first escalation. | [optional] 
**escalation_cron_schedule** | **str** | Cron schedule for escalations. | [optional] 
**escalation_chain** | [**[]ApprovalconfigEscalationConfigEscalationChainInner**](approvalconfig-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 
}

## Example

```python
from sailpoint.sources.models.approvalconfig_escalation_config import ApprovalconfigEscalationConfig

approvalconfig_escalation_config = ApprovalconfigEscalationConfig(
enabled=True,
days_until_first_escalation=2,
escalation_cron_schedule='*/5 * * * *',
escalation_chain=[
                    sailpoint.sources.models.approvalconfig_escalation_config_escalation_chain_inner.approvalconfig_escalationConfig_escalationChain_inner(
                        tier = 1, 
                        identity_id = 'fdfda352157d4cc79bb749953131b457', 
                        identity_type = 'IDENTITY', )
                    ]
)

```
[[Back to top]](#) 

