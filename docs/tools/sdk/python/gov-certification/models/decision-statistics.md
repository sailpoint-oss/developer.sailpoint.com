# DecisionStatistics

# DecisionStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **int** | Count of approval decisions for this item type. | [optional] 
**revoked** | **int** | Count of revoke decisions for this item type. | [optional] 
**acknowledged** | **int** | Count of acknowledge decisions for this item type. | [optional] 
**decisions_made** | **int** | Count of decisions made so far for this item type. | [optional] 
**decisions_total** | **int** | Count of all decisions for this item type, both made and yet-to-be-made. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.decision_statistics import DecisionStatistics

decision_statistics = DecisionStatistics(
approved=42,
revoked=7,
acknowledged=15,
decisions_made=64,
decisions_total=100
)

```
[[Back to top]](#) 

