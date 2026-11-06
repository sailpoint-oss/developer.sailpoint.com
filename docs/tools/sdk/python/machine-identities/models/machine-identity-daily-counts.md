# MachineIdentityDailyCounts

# MachineIdentityDailyCounts

Daily counts of non-human entities for the tenant over a window of days.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **date** | First day (UTC) of the window, inclusive. | [optional] 
**to** | **date** | Last day (UTC) of the window, inclusive. This is always the day before the current UTC date. | [optional] 
**days** | [**[]MachineIdentityDailyCountsDay**](machine-identity-daily-counts-day) | One entry for each calendar day in the window, in ascending order. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_daily_counts import MachineIdentityDailyCounts

machine_identity_daily_counts = MachineIdentityDailyCounts(
var_from='Wed May 27 00:00:00 UTC 2026',
to='Thu Jun 25 00:00:00 UTC 2026',
days=[
                    sailpoint.machine_identities.models.machine_identity_daily_counts_day.Machine Identity Daily Counts Day(
                        day = 'Thu Jun 25 00:00:00 UTC 2026', 
                        metrics = [
                            sailpoint.machine_identities.models.machine_identity_daily_count_metric.Machine Identity Daily Count Metric(
                                entity_type = 'machine_identity', 
                                sub_type = 'AI Agent', 
                                total_count = 412, 
                                created_count = 3, 
                                created_count30d = 37, )
                            ], )
                    ]
)

```
[[Back to top]](#) 

