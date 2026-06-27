---
id: healthevent
title: Healthevent
pagination_label: Healthevent
sidebar_label: Healthevent
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Healthevent', 'Healthevent'] 
slug: /tools/sdk/python/managed-clients/models/healthevent
tags: ['SDK', 'Software Development Kit', 'Healthevent', 'Healthevent']
---

# Healthevent

Individual error or warning event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_message** | **str** | Description of the issue | [optional] 
**uuid** | **str** | Unique identifier for the health event | [optional] 
**url** | **str** | Optional URL associated with the issue | [optional] 
**timestamp** | **datetime** | Time when the event occurred | [optional] 
**last_notified_time_stamp** | **datetime** | Last time notification was sent for this issue | [optional] 
**cpu_utilization_percentage** | **float** | CPU usage percentage | [optional] 
**free_space_percentage** | **float** | Free memory percentage | [optional] 
}

## Example

```python
from sailpoint.managed_clients.models.healthevent import Healthevent

healthevent = Healthevent(
detailed_message='CPU utilization is high',
uuid='5',
url='https://example.com:80/',
timestamp='2025-03-25T14:46:58.605Z',
last_notified_time_stamp='2025-08-06T06:53:22.206956Z',
cpu_utilization_percentage=80,
free_space_percentage=8
)

```
[[Back to top]](#) 

