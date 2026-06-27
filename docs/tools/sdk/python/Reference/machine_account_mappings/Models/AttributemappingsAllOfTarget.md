---
id: attributemappings-all-of-target
title: AttributemappingsAllOfTarget
pagination_label: AttributemappingsAllOfTarget
sidebar_label: AttributemappingsAllOfTarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributemappingsAllOfTarget', 'AttributemappingsAllOfTarget'] 
slug: /tools/sdk/python/machine-account-mappings/models/attributemappings-all-of-target
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTarget', 'AttributemappingsAllOfTarget']
---

# AttributemappingsAllOfTarget

Targeted Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT',    'IDENTITY',    'OWNER_ACCOUNT',    'OWNER_IDENTITY' ] | The type of target entity | [optional] 
**attribute_name** | **str** | Name of the targeted attribute | [optional] 
**source_id** | **str** | The ID of Source | [optional] 
}

## Example

```python
from sailpoint.machine_account_mappings.models.attributemappings_all_of_target import AttributemappingsAllOfTarget

attributemappings_all_of_target = AttributemappingsAllOfTarget(
type='IDENTITY',
attribute_name='businessApplication',
source_id='2c9180835d2e5168015d32f890ca1581'
)

```
[[Back to top]](#) 

