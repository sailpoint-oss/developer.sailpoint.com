# ActivityInsights

# ActivityInsights


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usage_days** | **int** | The number of usage days in the last 90 days | [optional] 
**usage_days_state** |  **Enum** [  'COMPLETE',    'UNKNOWN' ] | The state indicates whether data is missing, or whether there is usage data with no value | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.activity_insights import ActivityInsights

activity_insights = ActivityInsights(
usage_days=12,
usage_days_state='COMPLETE'
)

```
[[Back to top]](#) 

