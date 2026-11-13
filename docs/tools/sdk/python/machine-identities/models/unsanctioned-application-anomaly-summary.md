# UnsanctionedApplicationAnomalySummary

# UnsanctionedApplicationAnomalySummary

Aggregate counts of machine identities flagged with unsanctioned-application anomalies, used to power the Unsanctioned Agents card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anomaly_type** | **str** | The anomaly type these counts describe. Always unsanctioned_app for this endpoint. | [optional] 
**agent_count** | **int** | Number of distinct agents with at least one unsanctioned-application anomaly. | [optional] 
**user_count** | **int** | Number of distinct owners (users) associated with unsanctioned-application anomalies. | [optional] 
**event_count** | **int** | Total number of unsanctioned-application anomaly records. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.unsanctioned_application_anomaly_summary import UnsanctionedApplicationAnomalySummary

unsanctioned_application_anomaly_summary = UnsanctionedApplicationAnomalySummary(
anomaly_type='unsanctioned_app',
agent_count=23,
user_count=254,
event_count=97
)

```
[[Back to top]](#) 

