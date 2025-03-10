---
id: beta-multi-host-integration-template-type
title: MultiHostIntegrationTemplateType
pagination_label: MultiHostIntegrationTemplateType
sidebar_label: MultiHostIntegrationTemplateType
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostIntegrationTemplateType', 'BetaMultiHostIntegrationTemplateType'] 
slug: /tools/sdk/python/beta/models/multi-host-integration-template-type
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationTemplateType', 'BetaMultiHostIntegrationTemplateType']
---

# MultiHostIntegrationTemplateType

This represents a Multi-Host Integration template type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the type. | [optional] 
**type** | **str** | This is the type value for the type. | [required]
**script_name** | **str** | This is the scriptName attribute value for the type. | [required]
}

## Example

```python
from sailpoint.beta.models.multi_host_integration_template_type import MultiHostIntegrationTemplateType

multi_host_integration_template_type = MultiHostIntegrationTemplateType(
name='aName',
type='aType',
script_name='aScriptName'
)

```
[[Back to top]](#) 

