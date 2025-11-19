---
id: v2025-managed-client-health-indicators
title: ManagedClientHealthIndicators
pagination_label: ManagedClientHealthIndicators
sidebar_label: ManagedClientHealthIndicators
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClientHealthIndicators', 'V2025ManagedClientHealthIndicators'] 
slug: /tools/sdk/python/v2025/models/managed-client-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedClientHealthIndicators', 'V2025ManagedClientHealthIndicators']
---

# ManagedClientHealthIndicators

Health Indicators for a Managed Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ManagedClientHealthIndicatorsBody**](managed-client-health-indicators-body) |  | [required]
**status** |  **Enum** [  'NORMAL',    'UNDEFINED',    'WARNING',    'ERROR',    'FAILED' ] | Top-level status of the Managed Client | [required]
**type** |  **Enum** [  'VA',    'CCG' ] | Type of the Managed Client | [required]
**timestamp** | **datetime** | Timestamp when this report was generated | [required]
}

## Example

```python
from sailpoint.v2025.models.managed_client_health_indicators import ManagedClientHealthIndicators

managed_client_health_indicators = ManagedClientHealthIndicators(
body=sailpoint.v2025.models.managed_client_health_indicators_body.ManagedClientHealthIndicators_body(
                    alert_key = '', 
                    id = '9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2', 
                    cluster_id = 'c2a2139cbc754e42b4279a69ec5f58ec', 
                    api_user = '9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2', 
                    ccg_etag = 'c95e5c4417952dbcc9b4974999ece14e', 
                    ccg_pin = 'NONE', 
                    cookbook_etag = '3018-master-2ce6ac16-20250717124641-3077-master-a101b5fe-20250722162527', 
                    hostname = 'Testing1', 
                    internal_ip = '172.18.54.5', 
                    last_seen = '1754465728720', 
                    since_seen = '23195', 
                    since_seen_millis = '23195', 
                    local_dev = False, 
                    stacktrace = '', 
                    state = '', 
                    status = 'NORMAL', 
                    uuid = '', 
                    product = 'idn', 
                    va_version = '', 
                    platform_version = '2', 
                    os_version = '4230.2.1', 
                    os_type = 'flatcar', 
                    hypervisor = 'vmware', 
                    consolidated_health_indicators_status = 'ERROR', 
                    last_notified_ccg_version = '1068', 
                    deployed_processes = '', 
                    health_indicators = sailpoint.v2025.models.managed_client_health_indicators_body_health_indicators.ManagedClientHealthIndicators_body_health_indicators(
                        container = sailpoint.v2025.models.health_indicator_category.HealthIndicatorCategory(
                            errors = [
                                sailpoint.v2025.models.health_event.HealthEvent(
                                    detailed_message = 'CPU utilization is high', 
                                    uuid = '5', 
                                    url = 'https://example.com:80/', 
                                    timestamp = '2025-03-25T14:46:58.605Z', 
                                    last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                                    cpu_utilization_percentage = 80, 
                                    free_space_percentage = 8, )
                                ], 
                            warnings = [
                                sailpoint.v2025.models.health_event.HealthEvent(
                                    detailed_message = 'CPU utilization is high', 
                                    uuid = '5', 
                                    url = 'https://example.com:80/', 
                                    timestamp = '2025-03-25T14:46:58.605Z', 
                                    last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                                    cpu_utilization_percentage = 80, 
                                    free_space_percentage = 8, )
                                ], ), 
                        memory = sailpoint.v2025.models.health_indicator_category.HealthIndicatorCategory(), 
                        cpu = , ), ),
status='NORMAL',
type='VA',
timestamp='2025-08-06T07:35:28.722300Z'
)

```
[[Back to top]](#) 

