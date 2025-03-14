---
id: v2024-service-desk-source
title: ServiceDeskSource
pagination_label: ServiceDeskSource
sidebar_label: ServiceDeskSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ServiceDeskSource', 'V2024ServiceDeskSource'] 
slug: /tools/sdk/python/v2024/models/service-desk-source
tags: ['SDK', 'Software Development Kit', 'ServiceDeskSource', 'V2024ServiceDeskSource']
---

# ServiceDeskSource

Source for Service Desk integration template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | DTO type of source for service desk integration template. | [optional] 
**id** | **str** | ID of source for service desk integration template. | [optional] 
**name** | **str** | Human-readable name of source for service desk integration template. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.service_desk_source import ServiceDeskSource

service_desk_source = ServiceDeskSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

