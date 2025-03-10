---
id: service-desk-integration-template-type
title: ServiceDeskIntegrationTemplateType
pagination_label: ServiceDeskIntegrationTemplateType
sidebar_label: ServiceDeskIntegrationTemplateType
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ServiceDeskIntegrationTemplateType', 'ServiceDeskIntegrationTemplateType'] 
slug: /tools/sdk/python/v3/models/service-desk-integration-template-type
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateType', 'ServiceDeskIntegrationTemplateType']
---

# ServiceDeskIntegrationTemplateType

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
from sailpoint.v3.models.service_desk_integration_template_type import ServiceDeskIntegrationTemplateType

service_desk_integration_template_type = ServiceDeskIntegrationTemplateType(
name='aName',
type='aType',
script_name='aScriptName'
)

```
[[Back to top]](#) 

