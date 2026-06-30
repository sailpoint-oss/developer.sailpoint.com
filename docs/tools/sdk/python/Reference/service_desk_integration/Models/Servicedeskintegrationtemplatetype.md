---
id: servicedeskintegrationtemplatetype
title: Servicedeskintegrationtemplatetype
pagination_label: Servicedeskintegrationtemplatetype
sidebar_label: Servicedeskintegrationtemplatetype
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Servicedeskintegrationtemplatetype', 'Servicedeskintegrationtemplatetype'] 
slug: /tools/sdk/python/service-desk-integration/models/servicedeskintegrationtemplatetype
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationtemplatetype', 'Servicedeskintegrationtemplatetype']
---

# Servicedeskintegrationtemplatetype

This represents a Service Desk Integration template type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the type. | [optional] 
**type** | **str** | This is the type value for the type. | [required]
**script_name** | **str** | This is the scriptName attribute value for the type. | [required]
}

## Example

```python
from sailpoint.service_desk_integration.models.servicedeskintegrationtemplatetype import Servicedeskintegrationtemplatetype

servicedeskintegrationtemplatetype = Servicedeskintegrationtemplatetype(
name='aName',
type='aType',
script_name='aScriptName'
)

```
[[Back to top]](#) 

