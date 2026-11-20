# MachineIdentityDailyCountsDay

# MachineIdentityDailyCountsDay

Counts recorded for a single calendar day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **date** | Calendar day (UTC) the counts were recorded for. | [optional] 
**metrics** | [**[]MachineIdentityDailyCountMetric**](machine-identity-daily-count-metric) | Counts for each entity type and subtype. The array is empty when no counts were recorded for the day. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_daily_counts_day import MachineIdentityDailyCountsDay

machine_identity_daily_counts_day = MachineIdentityDailyCountsDay(
day='Thu Jun 25 00:00:00 UTC 2026',
metrics=[
                    sailpoint.machine_identities.models.machine_identity_daily_count_metric.Machine Identity Daily Count Metric(
                        entity_type = 'machine_identity', 
                        sub_type = 'AI Agent', 
                        total_count = 412, 
                        created_count = 3, 
                        created_count30d = 37, )
                    ]
)

```
[[Back to top]](#) 

