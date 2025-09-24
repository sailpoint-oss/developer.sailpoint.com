---
id: v2025-health-indicator-category
title: HealthIndicatorCategory
pagination_label: HealthIndicatorCategory
sidebar_label: HealthIndicatorCategory
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'HealthIndicatorCategory', 'V2025HealthIndicatorCategory'] 
slug: /tools/sdk/python/v2025/models/health-indicator-category
tags: ['SDK', 'Software Development Kit', 'HealthIndicatorCategory', 'V2025HealthIndicatorCategory']
---

# HealthIndicatorCategory

Health indicator category data with errors and warnings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[]HealthEvent**](health-event) | List of error events for this category | [optional] 
**warnings** | [**[]HealthEvent**](health-event) | List of warning events for this category | [optional] 
}

## Example

```python
from sailpoint.v2025.models.health_indicator_category import HealthIndicatorCategory

health_indicator_category = HealthIndicatorCategory(
errors=[
                    sailpoint.v2025.models.health_event.HealthEvent(
                        detailed_message = 'CPU utilization is high', 
                        uuid = '5', 
                        url = 'https://example.com:80/', 
                        timestamp = '2025-03-25T14:46:58.605Z', 
                        last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                        cpu_utilization_percentage = 80, 
                        free_space_percentage = 8, )
                    ],
warnings=[
                    sailpoint.v2025.models.health_event.HealthEvent(
                        detailed_message = 'CPU utilization is high', 
                        uuid = '5', 
                        url = 'https://example.com:80/', 
                        timestamp = '2025-03-25T14:46:58.605Z', 
                        last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                        cpu_utilization_percentage = 80, 
                        free_space_percentage = 8, )
                    ]
)

```
[[Back to top]](#) 

