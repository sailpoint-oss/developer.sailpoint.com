# CorrelationRule

# CorrelationRule

A single correlation rule within an ownership correlation config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Omit for new rules (server mints a UUID). Send only when updating a rule that already exists on this config (merge on PATCH). Unknown ids are rejected. | [optional] 
**priority** | **int** | The evaluation priority of the rule. Lower values are evaluated first. | [required]
**default_rule** | **bool** | Whether this rule is the default rule for the config. | [required]
**rule_type** |  **Enum** [  'IDENTITY',    'ACCOUNT',    'GOVERNANCE_GROUP' ] | The rule subject type. When either ruleType or ruleAction.type is GOVERNANCE_GROUP, both must be; ruleType GOVERNANCE_GROUP is allowed only when the parent config type is OWNER_SECONDARY. | [required]
**rule_action** | [**CorrelationRuleAction**](correlation-rule-action) |  | [required]
**condition_expressions** | [**[]CorrelationCondition**](correlation-condition) | The conditions that must match for this rule to apply. | [required]
\}

## Example

```python
from sailpoint.machine_identities.models.correlation_rule import CorrelationRule

correlation_rule = CorrelationRule(
id='9c1f0b6a-2f2e-4a2b-8b7c-1a2b3c4d5e6f',
priority=1,
default_rule=False,
rule_type='IDENTITY',
rule_action=sailpoint.machine_identities.models.correlation_rule_action.Correlation Rule Action(
                    type = 'IDENTITY', 
                    payload = {"identityId":"2c9180858082150f0180893dbaf44201"}, ),
condition_expressions=[
                    sailpoint.machine_identities.models.correlation_condition.Correlation Condition(
                        id = '1b2c3d4e-5f60-4a7b-8c9d-0e1f2a3b4c5d', 
                        left_attribute_name = 'manager', 
                        operator_type = 'EQUALS', 
                        right_attribute_name = 'owner', 
                        transform = 'toUpper', 
                        ordinal = 0, )
                    ]
)

```
[[Back to top]](#) 

