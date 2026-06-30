---
id: queuedcheckconfigdetails
title: Queuedcheckconfigdetails
pagination_label: Queuedcheckconfigdetails
sidebar_label: Queuedcheckconfigdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Queuedcheckconfigdetails', 'Queuedcheckconfigdetails'] 
slug: /tools/sdk/python/service-desk-integration/models/queuedcheckconfigdetails
tags: ['SDK', 'Software Development Kit', 'Queuedcheckconfigdetails', 'Queuedcheckconfigdetails']
---

# Queuedcheckconfigdetails

Configuration of maximum number of days and interval for checking Service Desk integration queue status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_status_check_interval_minutes** | **str** | Interval in minutes between status checks | [required]
**provisioning_max_status_check_days** | **str** | Maximum number of days to check | [required]
}

## Example

```python
from sailpoint.service_desk_integration.models.queuedcheckconfigdetails import Queuedcheckconfigdetails

queuedcheckconfigdetails = Queuedcheckconfigdetails(
provisioning_status_check_interval_minutes='30',
provisioning_max_status_check_days='2'
)

```
[[Back to top]](#) 

