# DeviceSummary

# DeviceSummary

Tenant-wide device counts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_endpoints** | **int** | The total number of devices in the tenant. | [optional] 
**by_os** | [**DeviceOSCounts**](device-os-counts) |  | [optional] 
**avg_agents_per_endpoint** | **float** | The average number of agents per device, rounded to one decimal place. | [optional] 
**endpoints_without_recent_data** | **int** | The number of devices for which the source has sent no endpoint data or resource link in the last three days. | [optional] 
**endpoints_with_active_agents** | **int** | The number of devices linked to at least one existing agent. | [optional] 
\}

## Example

```python
from sailpoint.devices.models.device_summary import DeviceSummary

device_summary = DeviceSummary(
total_endpoints=1250,
by_os=sailpoint.devices.models.device_os_counts.Device OS Counts(
                    macos = 610, 
                    windows = 540, 
                    linux = 85, 
                    unknown = 15, ),
avg_agents_per_endpoint=2.4,
endpoints_without_recent_data=37,
endpoints_with_active_agents=980
)

```
[[Back to top]](#) 

