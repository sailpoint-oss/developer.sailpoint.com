# DetailedDecisionSummary

# DetailedDecisionSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_decisions** | [**DecisionStatistics**](decision-statistics) |  | [optional] 
**access_profile_decisions** | [**DecisionStatistics**](decision-statistics) |  | [optional] 
**role_decisions** | [**DecisionStatistics**](decision-statistics) |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.detailed_decision_summary import DetailedDecisionSummary

detailed_decision_summary = DetailedDecisionSummary(
entitlement_decisions=sailpoint.gov_certification.models.decision_statistics.Decision statistics(
                    approved = 42, 
                    revoked = 7, 
                    acknowledged = 15, 
                    decisions_made = 64, 
                    decisions_total = 100, ),
access_profile_decisions=sailpoint.gov_certification.models.decision_statistics.Decision statistics(
                    approved = 42, 
                    revoked = 7, 
                    acknowledged = 15, 
                    decisions_made = 64, 
                    decisions_total = 100, ),
role_decisions=sailpoint.gov_certification.models.decision_statistics.Decision statistics(
                    approved = 42, 
                    revoked = 7, 
                    acknowledged = 15, 
                    decisions_made = 64, 
                    decisions_total = 100, )
)

```
[[Back to top]](#) 

