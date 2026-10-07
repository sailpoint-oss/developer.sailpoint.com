# ApprovalConfigEscalationConfig

# ApprovalConfigEscalationConfig

Configuration for escalations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if escalations are enabled. | [optional] [default to False]
**days_until_first_escalation** | **int** | Number of days until the first escalation. | [optional] 
**escalation_cron_schedule** | **str** | Cron schedule for escalations. | [optional] 
**escalation_chain** | [**[]ApprovalConfigEscalationConfigEscalationChainInner**](approval-config-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_config_escalation_config import ApprovalConfigEscalationConfig

approval_config_escalation_config = ApprovalConfigEscalationConfig(
enabled=True,
days_until_first_escalation=2,
escalation_cron_schedule='@every 72h',
escalation_chain=[
                    sailpoint.approvals.models.approval_config_escalation_config_escalation_chain_inner.ApprovalConfig_escalationConfig_escalationChain_inner(
                        identity_id = 'fdfda352157d4cc79bb749953131b457', 
                        identity_type = 'IDENTITY', )
                    ]
)

```
[[Back to top]](#) 

