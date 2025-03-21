---
id: beta-va-cluster-status-change-event-application
title: VAClusterStatusChangeEventApplication
pagination_label: VAClusterStatusChangeEventApplication
sidebar_label: VAClusterStatusChangeEventApplication
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VAClusterStatusChangeEventApplication', 'BetaVAClusterStatusChangeEventApplication'] 
slug: /tools/sdk/python/beta/models/va-cluster-status-change-event-application
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventApplication', 'BetaVAClusterStatusChangeEventApplication']
---

# VAClusterStatusChangeEventApplication

Details about the `CLUSTER` or `SOURCE` that initiated the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Application's globally unique identifier (GUID). | [required]
**name** | **str** | Application name. | [required]
**attributes** | **map[string]object** | Custom map of attributes for a source. Attributes only populate if the type is `SOURCE` and the source has a proxy. | [required]
}

## Example

```python
from sailpoint.beta.models.va_cluster_status_change_event_application import VAClusterStatusChangeEventApplication

va_cluster_status_change_event_application = VAClusterStatusChangeEventApplication(
id='2c9180866166b5b0016167c32ef31a66',
name='Production VA Cluster',
attributes={ }
)

```
[[Back to top]](#) 

