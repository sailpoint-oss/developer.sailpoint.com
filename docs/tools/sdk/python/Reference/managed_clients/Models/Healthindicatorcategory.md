---
id: healthindicatorcategory
title: Healthindicatorcategory
pagination_label: Healthindicatorcategory
sidebar_label: Healthindicatorcategory
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Healthindicatorcategory', 'Healthindicatorcategory'] 
slug: /tools/sdk/python/managed-clients/models/healthindicatorcategory
tags: ['SDK', 'Software Development Kit', 'Healthindicatorcategory', 'Healthindicatorcategory']
---

# Healthindicatorcategory

Health indicator category data with errors and warnings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[]Healthevent**](healthevent) | List of error events for this category | [optional] 
**warnings** | [**[]Healthevent**](healthevent) | List of warning events for this category | [optional] 
}

## Example

```python
from sailpoint.managed_clients.models.healthindicatorcategory import Healthindicatorcategory

healthindicatorcategory = Healthindicatorcategory(
errors=[
                    sailpoint.managed_clients.models.healthevent.healthevent(
                        detailed_message = 'CPU utilization is high', 
                        uuid = '5', 
                        url = 'https://example.com:80/', 
                        timestamp = '2025-03-25T14:46:58.605Z', 
                        last_notified_time_stamp = '2025-08-06T06:53:22.206956Z', 
                        cpu_utilization_percentage = 80, 
                        free_space_percentage = 8, )
                    ],
warnings=[
                    sailpoint.managed_clients.models.healthevent.healthevent(
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

