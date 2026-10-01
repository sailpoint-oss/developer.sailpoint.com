# ManagedClientHealthIndicatorsBodyHealthIndicators

# ManagedClientHealthIndicatorsBodyHealthIndicators

Health indicators grouped by category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**memory** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**cpu** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
\}

## Example

```python
from sailpoint.managed_clients.models.managed_client_health_indicators_body_health_indicators import ManagedClientHealthIndicatorsBodyHealthIndicators

managed_client_health_indicators_body_health_indicators = ManagedClientHealthIndicatorsBodyHealthIndicators(
container=sailpoint.managed_clients.models.health_indicator_category.HealthIndicatorCategory(
                    errors = [
                        sailpoint.managed_clients.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.managed_clients.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], ),
memory=sailpoint.managed_clients.models.health_indicator_category.HealthIndicatorCategory(
                    errors = [
                        sailpoint.managed_clients.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.managed_clients.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], ),
cpu=sailpoint.managed_clients.models.health_indicator_category.HealthIndicatorCategory(
                    errors = [
                        sailpoint.managed_clients.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.managed_clients.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], )
)

```
[[Back to top]](#) 

