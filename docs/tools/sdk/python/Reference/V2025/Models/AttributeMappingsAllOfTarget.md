---
id: v2025-attribute-mappings-all-of-target
title: AttributeMappingsAllOfTarget
pagination_label: AttributeMappingsAllOfTarget
sidebar_label: AttributeMappingsAllOfTarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeMappingsAllOfTarget', 'V2025AttributeMappingsAllOfTarget'] 
slug: /tools/sdk/python/v2025/models/attribute-mappings-all-of-target
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTarget', 'V2025AttributeMappingsAllOfTarget']
---

# AttributeMappingsAllOfTarget

Targeted Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of target entity | [optional] 
**attribute_name** | **str** | Name of the targeted attribute | [optional] 
**source_id** | **str** | The ID of Source | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attribute_mappings_all_of_target import AttributeMappingsAllOfTarget

attribute_mappings_all_of_target = AttributeMappingsAllOfTarget(
type='IDENTITY',
attribute_name='businessApplication',
source_id='2c9180835d2e5168015d32f890ca1581'
)

```
[[Back to top]](#) 

