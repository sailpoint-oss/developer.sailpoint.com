# CorrelationCondition

# CorrelationCondition

A single condition expression within a correlation rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the condition. | [optional] 
**left_attribute_name** | **str** | The left-hand attribute name of the condition. | [required]
**operator_type** | **str** | The comparison operator applied between the left and right attributes. | [required]
**right_attribute_name** | **str** | The right-hand attribute name. Use an empty string when there is no RHS attribute. | [required]
**transform** | **str** | Optional transform applied before comparison. | [optional] 
**ordinal** | **int** | The position of this condition within the rule. | [required]
\}

## Example

```python
from sailpoint.machine_identities.models.correlation_condition import CorrelationCondition

correlation_condition = CorrelationCondition(
id='1b2c3d4e-5f60-4a7b-8c9d-0e1f2a3b4c5d',
left_attribute_name='manager',
operator_type='EQUALS',
right_attribute_name='owner',
transform='toUpper',
ordinal=0
)

```
[[Back to top]](#) 

