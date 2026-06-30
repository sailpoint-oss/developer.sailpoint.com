---
id: managedclienthealthindicators-body-health-indicators
title: ManagedclienthealthindicatorsBodyHealthIndicators
pagination_label: ManagedclienthealthindicatorsBodyHealthIndicators
sidebar_label: ManagedclienthealthindicatorsBodyHealthIndicators
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedclienthealthindicatorsBodyHealthIndicators', 'ManagedclienthealthindicatorsBodyHealthIndicators'] 
slug: /tools/sdk/python/managed-clients/models/managedclienthealthindicators-body-health-indicators
tags: ['SDK', 'Software Development Kit', 'ManagedclienthealthindicatorsBodyHealthIndicators', 'ManagedclienthealthindicatorsBodyHealthIndicators']
---

# ManagedclienthealthindicatorsBodyHealthIndicators

Health indicators grouped by category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
**memory** | [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
**cpu** | [**Healthindicatorcategory**](healthindicatorcategory) |  | [optional] 
}

## Example

```python
from sailpoint.managed_clients.models.managedclienthealthindicators_body_health_indicators import ManagedclienthealthindicatorsBodyHealthIndicators

managedclienthealthindicators_body_health_indicators = ManagedclienthealthindicatorsBodyHealthIndicators(
container=sailpoint.managed_clients.models.healthindicatorcategory.healthindicatorcategory(
                    errors = [
                        sailpoint.managed_clients.models.healthevent.healthevent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.managed_clients.models.healthevent.healthevent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], ),
memory=sailpoint.managed_clients.models.healthindicatorcategory.healthindicatorcategory(
                    errors = [
                        sailpoint.managed_clients.models.healthevent.healthevent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.managed_clients.models.healthevent.healthevent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], ),
cpu=sailpoint.managed_clients.models.healthindicatorcategory.healthindicatorcategory(
                    errors = [
                        sailpoint.managed_clients.models.healthevent.healthevent(
                            detailed_message = 'CPU utilization is high', 
                            uuid = '5', 
                            url = 'https://example.com:80/', 
                            timestamp = '2025-03-25T14:46:58.605Z', 
                            last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                            cpu_utilization_percentage = 80, 
                            free_space_percentage = 8, )
                        ], 
                    warnings = [
                        sailpoint.managed_clients.models.healthevent.healthevent(
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

