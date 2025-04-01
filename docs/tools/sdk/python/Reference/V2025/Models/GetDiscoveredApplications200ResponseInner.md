---
id: v2025-get-discovered-applications200-response-inner
title: GetDiscoveredApplications200ResponseInner
pagination_label: GetDiscoveredApplications200ResponseInner
sidebar_label: GetDiscoveredApplications200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetDiscoveredApplications200ResponseInner', 'V2025GetDiscoveredApplications200ResponseInner'] 
slug: /tools/sdk/python/v2025/models/get-discovered-applications200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetDiscoveredApplications200ResponseInner', 'V2025GetDiscoveredApplications200ResponseInner']
---

# GetDiscoveredApplications200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the discovered application. | [optional] 
**name** | **str** | Name of the discovered application. | [optional] 
**discovery_source** | **str** | Source from which the application was discovered. | [optional] 
**discovered_vendor** | **str** | The vendor associated with the discovered application. | [optional] 
**description** | **str** | A brief description of the discovered application. | [optional] 
**recommended_connectors** | **[]str** | List of recommended connectors for the application. | [optional] 
**discovered_at** | **datetime** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**created_at** | **datetime** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**status** | **str** | The status of an application within the discovery source.  By default this field is set to \"ACTIVE\" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \"INACTIVE\". | [optional] 
**associated_sources** | **[]str** | List of associated sources related to this discovered application. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.get_discovered_applications200_response_inner import GetDiscoveredApplications200ResponseInner

get_discovered_applications200_response_inner = GetDiscoveredApplications200ResponseInner(
id='',
name='ExampleApp',
discovery_source='csv',
discovered_vendor='ExampleVendor',
description='An application for managing examples.',
recommended_connectors=[ConnectorA, ConnectorB],
discovered_at='2023-01-01T12:00Z',
created_at='2023-01-01T12:00Z',
status='ACTIVE',
associated_sources=[e0cc5d7d-bf7f-4f81-b2af-8885b09d9923, a0303682-5e4a-44f7-bdc2-6ce6112549c1]
)

```
[[Back to top]](#) 

