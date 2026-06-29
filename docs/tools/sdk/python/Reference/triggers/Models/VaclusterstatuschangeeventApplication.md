---
id: vaclusterstatuschangeevent-application
title: VaclusterstatuschangeeventApplication
pagination_label: VaclusterstatuschangeeventApplication
sidebar_label: VaclusterstatuschangeeventApplication
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VaclusterstatuschangeeventApplication', 'VaclusterstatuschangeeventApplication'] 
slug: /tools/sdk/python/triggers/models/vaclusterstatuschangeevent-application
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventApplication', 'VaclusterstatuschangeeventApplication']
---

# VaclusterstatuschangeeventApplication

Details about the `CLUSTER` or `SOURCE` that initiated this event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The GUID of the application | [required]
**name** | **str** | The name of the application | [required]
**attributes** | **map[string]object** | Custom map of attributes for a source.  This will only be populated if type is `SOURCE` and the source has a proxy. | [required]
}

## Example

```python
from sailpoint.triggers.models.vaclusterstatuschangeevent_application import VaclusterstatuschangeeventApplication

vaclusterstatuschangeevent_application = VaclusterstatuschangeeventApplication(
id='2c9180866166b5b0016167c32ef31a66',
name='Production VA Cluster',
attributes={ }
)

```
[[Back to top]](#) 

