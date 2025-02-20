---
id: beta-queued-check-config-details
title: QueuedCheckConfigDetails
pagination_label: QueuedCheckConfigDetails
sidebar_label: QueuedCheckConfigDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'QueuedCheckConfigDetails', 'BetaQueuedCheckConfigDetails'] 
slug: /tools/sdk/python/beta/models/queued-check-config-details
tags: ['SDK', 'Software Development Kit', 'QueuedCheckConfigDetails', 'BetaQueuedCheckConfigDetails']
---

# QueuedCheckConfigDetails

Configuration of maximum number of days and interval for checking Service Desk integration queue status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_status_check_interval_minutes** | **str** | Interval in minutes between status checks | [required]
**provisioning_max_status_check_days** | **str** | Maximum number of days to check | [required]
}

## Example

```python
from sailpoint.beta.models.queued_check_config_details import QueuedCheckConfigDetails

queued_check_config_details = QueuedCheckConfigDetails(
provisioning_status_check_interval_minutes='30',
provisioning_max_status_check_days='2'
)

```
[[Back to top]](#) 

