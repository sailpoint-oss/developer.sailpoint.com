---
id: v2025-managed-client-health-indicators-body-health-indicators
title: ManagedClientHealthIndicatorsBodyHealthIndicators
pagination_label: ManagedClientHealthIndicatorsBodyHealthIndicators
sidebar_label: ManagedClientHealthIndicatorsBodyHealthIndicators
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClientHealthIndicatorsBodyHealthIndicators', 'V2025ManagedClientHealthIndicatorsBodyHealthIndicators'] 
slug: /tools/sdk/python/v2025/models/managed-client-health-indicators-body-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedClientHealthIndicatorsBodyHealthIndicators', 'V2025ManagedClientHealthIndicatorsBodyHealthIndicators']
---

# ManagedClientHealthIndicatorsBodyHealthIndicators

Health indicators grouped by category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**memory** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
**cpu** | [**HealthIndicatorCategory**](health-indicator-category) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.managed_client_health_indicators_body_health_indicators import ManagedClientHealthIndicatorsBodyHealthIndicators

managed_client_health_indicators_body_health_indicators = ManagedClientHealthIndicatorsBodyHealthIndicators(
container=sailpoint.v2025.models.health_indicator_category.HealthIndicatorCategory(
                    errors = [
                        sailpoint.v2025.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://sample.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.v2025.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://sample.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], ),
memory=sailpoint.v2025.models.health_indicator_category.HealthIndicatorCategory(
                    errors = [
                        sailpoint.v2025.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://sample.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.v2025.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://sample.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], ),
cpu=sailpoint.v2025.models.health_indicator_category.HealthIndicatorCategory(
                    errors = [
                        sailpoint.v2025.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://sample.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.v2025.models.health_event.HealthEvent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://sample.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], )
)

```
[[Back to top]](#) 

