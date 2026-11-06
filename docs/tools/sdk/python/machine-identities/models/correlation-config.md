# CorrelationConfig

# CorrelationConfig

An ownership correlation config scoped to a source resource. Configs are of type OWNER_PRIMARY or OWNER_SECONDARY and drive how machine identity owners are correlated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the correlation config. | [required]
**source_id** | **str** | The source ID this config belongs to. | [required]
**resource_id** | **str** | The source resource identifier for this config scope. | [required]
**type** |  **Enum** [  'OWNER_PRIMARY',    'OWNER_SECONDARY' ] | The correlation config type. | [required]
**attributes** | **map[string]object** | JSON object of config attributes. May include syncPrimaryToMachineAccounts (boolean) on OWNER_PRIMARY only. | [required]
**rules** | [**[]CorrelationRule**](correlation-rule) | The ordered set of correlation rules for this config. | [required]
**created** | **datetime** | Creation date of the config. | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the config. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.machine_identities.models.correlation_config import CorrelationConfig

correlation_config = CorrelationConfig(
id='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
source_id='2c9180835d191a86015d28455b4a2329',
resource_id='aws:iam-role',
type='OWNER_PRIMARY',
attributes={"syncPrimaryToMachineAccounts":true},
rules=[
                    sailpoint.machine_identities.models.correlation_rule.Correlation Rule(
                        id = '9c1f0b6a-2f2e-4a2b-8b7c-1a2b3c4d5e6f', 
                        priority = 1, 
                        default_rule = False, 
                        rule_type = 'IDENTITY', 
                        rule_action = sailpoint.machine_identities.models.correlation_rule_action.Correlation Rule Action(
                            type = 'IDENTITY', 
                            payload = {"identityId":"2c9180858082150f0180893dbaf44201"}, ), 
                        condition_expressions = [
                            sailpoint.machine_identities.models.correlation_condition.Correlation Condition(
                                id = '1b2c3d4e-5f60-4a7b-8c9d-0e1f2a3b4c5d', 
                                left_attribute_name = 'manager', 
                                operator_type = 'EQUALS', 
                                right_attribute_name = 'owner', 
                                transform = 'toUpper', 
                                ordinal = 0, )
                            ], )
                    ],
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z'
)

```
[[Back to top]](#) 

